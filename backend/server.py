from flask import Flask, request, redirect
import random
import json

app = Flask(__name__)

file_path = "./carrer_json.json"

f = open(file_path, 'r', encoding="utf-8")
data = json.load(f)


@app.route('/api/carrer/<carrer>')
def read_carrer(carrer):
    return data[carrer]

app.run(port=80, debug=True)