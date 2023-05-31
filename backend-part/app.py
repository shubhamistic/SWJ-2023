from flask import Flask
from flask_cors import CORS
from routes.swj2023.index import swj2023_routes


app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return {
        "message": "Welcome to SWJ!",
        "fulfilled": True
    }


# Register the swj2023_routes with /swj2023 URL prefix
app.register_blueprint(swj2023_routes, url_prefix='/swj2023')


if __name__ == "__main__":
    app.run(debug=True)
