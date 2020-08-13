from app import app, mongo
import bson
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request

#Post add new multitools
@app.route('/multitool/add', methods=['POST'])
def add_multitool():
    _json = request.json
    _name = _json['name']
    _type = _json['type']
    _image_url = _json['image_url']
    _system = _json['system']
    _planet = _json['planet']
    _coords = _json['coords']
    _address = _json['address']
    _area = _json['area']
    _tool_class = _json['tClass']
    _slots = _json['slots']
    # validate the received values
    if request.method == 'POST': 
        # save details
        mongo.db.multitools.insert({'name': _name, 'type': _type, 'image_url': _image_url, 'system': _system, 'planet': _planet, 'coords': _coords, 'address': _address, 'area': _area, 'tClass': _tool_class, 'slots': _slots})
        resp = jsonify('Multitool added successfully')
        resp.status_code = 200
        return resp
    else:
        return not_found()

#Get All    
@app.route('/multitools')
def multitools():
    multitools = mongo.db.multitools.find()
    resp = dumps(multitools)
    return resp
    
#Get One
@app.route('/multitool/<id>')
def multitool(id):
    multitool = mongo.db.multitools.find_one({'_id': ObjectId(id)})
    resp = dumps(multitool)
    return resp

@app.route('/multitool/update', methods=['PUT'])
def update_multitool():
    _json = request.json
    _name = _json['name']
    _type = _json['type']
    _image_url = _json['image_url']
    _system = _json['system']
    _planet = _json['planet']
    _coords = _json['coords']
    _address = _json['address']
    _area = _json['area']
    _tool_class = _json['tClass']
    _slots = _json['slots']
    mongo.db.multitools.update_one({'name': _name}, {'$set': {'type': _type, 'image_url': _image_url, 'system': _system, 'planet': _planet, 'coords': _coords, 'address': _address, 'area': _area, 'tClass': _tool_class, 'slots': _slots}})
    resp = jsonify('Multitool updated successfully')
    resp.status_code = 200
    return resp
        
@app.route('/multitool/delete/<id>', methods=['DELETE'])
def delete_multitool(id):
    mongo.db.multitools.delete_one({'_id': ObjectId(id)})
    resp = jsonify('Multitool deleted successfully!')
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