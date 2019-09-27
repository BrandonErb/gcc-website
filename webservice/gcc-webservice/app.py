from flask import Flask
import flask_pymongo
from flask_pymongo import PyMongo
import config
# Based on https://www.roytuts.com/python-flask-rest-api-mongodb-crud-example/

app = Flask(__name__)
app.secret_key = "secret key"
app.config["MONGO_URI"] = config.connectionstring

mongo = PyMongo(app)