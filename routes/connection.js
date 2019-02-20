var express = require('express');
var router = express.Router();

var connection_controller = require('../controllers/connection');


router.get('/', connection_controller.test);

router.post('/create', connection_controller.connection_create);

router.get('/:connectionName', connection_controller.connection_details);

router.get('/getAllConnections', connection_controller.connection_getAll);

router.put('/:id/update', connection_controller.connection_update);

router.delete('/:id/delete', connection_controller.connection_delete);


module.exports = router;