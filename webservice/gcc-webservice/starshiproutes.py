from app import app, mongo
import bson
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request
#from werkzeug import generate_password_hash, check_password_hash

@app.route('/ship/add', methods=['POST'])
def add_ship():
    _json = request.json
    _id = _json['_id']
    _name = _json['name']
    _type = _json['type']
    _image_url = _json['image_url']
    _system = _json['system']
    _address = _json['address']
    _area = _json['area']
    _ship_class = _json['class']
    _slots = _json['slots']
    # validate the received values
    if _name and _email and _password and request.method == 'POST': 
        # save details
        mongo.db.user.insert({'name': _name, 'type': _name, 'image_url': _image_url, 'system': _system, 'address': _address, 'area': _area, 'class': _ship_class, 'slots': _slots})
        resp = jsonify('Ship added successfully')
        resp.status_code = 200
        return resp
    else:
        return not_found()

#Get        
@app.route('/ships')
def starships():
    starships = mongo.db.starships.find()
    resp = dumps(starships)
    return resp
    
#Get All
@app.route('/ship/<id>')
def starship(id):
    starship = mongo.db.starships.find_one({'_id': ObjectId(id)})
    resp = dumps(starship)
    return resp

@app.route('/ship/update', methods=['PUT'])
def update_starship():
    _json = request.json
    _id = _json['_id']
    _name = _json['name']    
    mongo.db.user.update_one({'_id': ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)}, {'$set': {'name': _name, 'email': _email, 'pwd': _hashed_password}})
    resp = jsonify('Ship updated successfully')
    resp.status_code = 200
    return resp
        
@app.route('/ship/delete/<id>', methods=['DELETE'])
def delete_ship(id):
    mongo.db.user.delete_one({'_id': ObjectId(id)})
    resp = jsonify('User deleted successfully!')
    resp.status_code = 200
    return resp
        
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp
