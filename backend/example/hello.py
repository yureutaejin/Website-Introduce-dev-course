from flask import Flask
import random

app = Flask(__name__)

@app.route("/")
def index():
    return ("hello random number is {}".format(random.random()))

@app.route("/carrer/<carrer_name>/")
def create(carrer_name):
    return ("carrer {}".format(carrer_name))


app.run(port=80, debug=True)