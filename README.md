# Sketch to Styled Image

Version 1: Single Specific Style of Vincent Van Gogh

### Dataset Setup:

    git clone https://github.com/lucasdavid/wikiart.git
    cd wikiart
    python wikiart.py --datadir ./wikiart-saved/ fetch --only "Vincent Van Gogh"

Then run through the dataset-creation notebook to generate a tensorflow dataset.

Use the PIX2PIX implementation notebook to create the models required and test them.