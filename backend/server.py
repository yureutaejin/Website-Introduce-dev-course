from flask import Flask, request, redirect
import random
import json

app = Flask(__name__)

carrer_path = "./carrer_json.json"
stack_path = "./stack_json.json"

f = open(carrer_path, 'r', encoding="utf-8")
carrer_data = json.load(f)

k = open(stack_path, 'r', encoding="utf-8")
stack_data = json.load(k)

@app.route('/api')
def test_attach():
    print("congratulation! Success to contact server")
    return "congratulation! Success to contact server"

@app.route('/api/carrer/<carrer>')
def read_carrer(carrer):
    return carrer_data[carrer]

@app.route('/api/stack/<stack>')
def read_stack(stack):
    return stack_data[stack]

app.run(host='0.0.0.0', port=5000)