from tensorflow.keras.models import load_model


def predict(image):
    model = load_model('./app/models/20231007-115307.keras')

    # Show the model architecture
    # print(model.summary())

    predictions = model(image)

    return predictions
