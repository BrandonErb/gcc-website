from app import app, mongo
import bson
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, request

#Post add new freighters
@app.route('/freighter/add', methods=['POST'])
def add_freighter():
    _json = request.json
    _name = _json['name']
    _type = _json['type']
    _image_url = _json['image_url']
    _system = _json['system']
    _address = _json['address']
    _area = _json['area']
    _ship_class = _json['fClass']
    _slots = _json['slots']
    # validate the received values
    if request.method == 'POST': 
        # save details
        mongo.db.freighters.insert({'name': _name, 'type': _type, 'image_url': _image_url, 'system': _system, 'address': _address, 'area': _area, 'fClass': _ship_class, 'slots': _slots})
        resp = jsonify('Freighter added successfully')
        resp.status_code = 200
        return resp
    else:
        return not_found()

#Get All    
@app.route('/freighters')
def freighters():
    freighters = mongo.db.freighters.find()
    resp = dumps(freighters)
    return resp
    
#Get One
@app.route('/freighter/<id>')
def freighter(id):
    freighter = mongo.db.freighters.find_one({'_id': ObjectId(id)})
    resp = dumps(freighter)
    return resp

@app.route('/freighter/update', methods=['PUT'])
def update_freighter():
    _json = request.json
    _name = _json['name']
    _type = _json['type']
    _image_url = _json['image_url']
    _system = _json['system']
    _address = _json['address']
    _area = _json['area']
    _ship_class = _json['fClass']
    _slots = _json['slots']
    mongo.db.freighters.update_one({'name': _name}, {'$set': {'type': _type, 'image_url': _image_url, 'system': _system, 'address': _address, 'area': _area, 'fClass': _ship_class, 'slots': _slots}})
    resp = jsonify('Freighter updated successfully')
    resp.status_code = 200
    return resp
        
@app.route('/freighter/delete/<id>', methods=['DELETE'])
def delete_freighter(id):
    mongo.db.freighters.delete_one({'_id': ObjectId(id)})
    resp = jsonify('Freighters deleted successfully!')
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


