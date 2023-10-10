
from flask import Flask, request, render_template
from flask_cors import CORS
import requests
import cv2
import json
import base64
from io import BytesIO
from PIL import Image
import numpy as np


from .model import predict, predict_anime


app = Flask(__name__)


CORS(app, supports_credentials=True, origins=['*',])


@app.route("/", methods = ['GET'])
def home():
    
    return render_template('index.html')


@app.route('/api/predict', methods = ['POST'])
def classify():

    try:
        
        # Get data
        data = request.get_json()
        image_data_url = data["image_data_url"]

        # Extract the base64-encoded image data from the Data URL
        _, encoded = image_data_url.split(",", 1)
        input_image_data = base64.b64decode(encoded)
        
        # Open, resize to shape required by model, remove alpha channel
        image = Image.open(BytesIO(input_image_data)).resize((256,256)).convert("RGB")
        
        # Convert the PIL image to a NumPy array
        image_np = np.array(image)
        
        image_np = (image_np / 127.5) - 1
        
        # Data needs to be in batch size = 1
        input_image = np.expand_dims(image_np, axis=0)
        
        if data["style"] == 0:
            prediction = predict(input_image)
        else:
            prediction = predict_anime(input_image)
        
        prediction = prediction.numpy()
        prediction = (prediction + 1 ) * 127.5
        prediction = prediction.astype(np.uint8)
        
        output_image_data = prediction[0]
        
        # Convert prediction into image
        output_image = Image.fromarray(output_image_data)
        
        # Convert output image into data URL
        buffered = BytesIO()
        output_image.save(buffered, format="JPEG")
        output_image_data = base64.b64encode(buffered.getvalue()).decode("utf-8")

        # Create the Data URL
        output_data_url = f"data:image/jpeg;base64,{output_image_data}"  
        
        return output_data_url, 200
    except Exception as e:
        print(str(e))
        return f"Error processing image: {str(e)}", 500

    # predict(None)
    
    
    
    
    return "OK"
    
    # imagefile = request.files['imagefile']
    # image_path = "./website/app/images/" + imagefile.filename
    # if imagefile.filename.endswith('.jpeg') or imagefile.filename.endswith('.png') or imagefile.filename.endswith('.jpg'):
    #     imagefile.save(image_path)
    # else:
    #     return render_template('index.html', image_class="not a valid image.")
        
    # image = cv2.imread(image_path)
    # image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # image_expanded = np.expand_dims(image_rgb, axis=0)
        
    # headers = {"content-type": "application/json"}
    # data = json.dumps({"signature_name": "serving_default", "instances": image_expanded.tolist()})

    # json_response = requests.post('http://tf-serving:8501/v1/models/saved_model:predict', data=data, headers=headers)
    # predictions = json.loads(json_response.text)['predictions']
    
    # predictions = json.loads(json_response.text)['predictions']

    # classOut = predictions[0]['detection_classes'][0]
    # image_class = CLASSES[int(classOut-1)]
    
    # return render_template('index.html', image_class=image_class)
    
    
    
    