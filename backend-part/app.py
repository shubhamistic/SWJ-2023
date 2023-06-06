from flask import Flask
from flask_cors import CORS
from routes.swj2023 import swj2023


app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return {
        "message": "Welcome to Startup Weekend Jaipur 2023!",
        "fulfilled": True
    }


# set up the swj2023 route
app.register_blueprint(swj2023, url_prefix='/swj2023')


if __name__ == "__main__":
    app.run(debug=True)
