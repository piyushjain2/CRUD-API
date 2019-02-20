var Connection = require('../models/connection');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.connection_create = function (req, res) {
    var connection = new Connection(
        {
            connectionName: req.body.connectionName,
            address: req.body.address,
            connectionType: req.body.connectionType,
            topic: req.body.topic
        }
    );

    connection.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Connection created successfully')
    })
};

exports.connection_details = function (req, res) {
       Connection.find({connectionName: req.params.connectionName}, function (err, connection) {
        if (err) return next(err);
        res.send(connection);
    });
};

exports.connection_update = function (req, res) {
    Connection.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, connection) {
        if (err) return next(err);
        res.send('Connection updated.');
    });
};

exports.connection_delete = function (req, res) {
    Connection.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};

exports.connection_getAll = function (req, res) {
    Connection.find({}, function (err, connections) {
        if (err) return next(err);
        res.send(connections);
    });
};