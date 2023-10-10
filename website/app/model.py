from tensorflow.keras.models import load_model


def predict(image):
    model = load_model('./app/models/20231007-115307.keras')

    # Show the model architecture
    # print(model.summary())

    predictions = model(image)

    return predictions


def predict_anime(image):
    model = load_model('./app/models/anime.h5')

    # Show the model architecture
    # print(model.summary())

    predictions = model(image)

    return predictions

