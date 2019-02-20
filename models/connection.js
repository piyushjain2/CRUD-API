var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConnectionSchema = new Schema({
    connectionName: {type: String, required: true, max: 100, 'index': { 'unique': true }},
    address: {type: String, required: true},
    connectionType: {type : String, required: true},
    topic: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Connection', ConnectionSchema);