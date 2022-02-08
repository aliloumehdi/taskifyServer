var express = require('express');
var router = express.Router();

const task_controller = require('../controllers/Tasks.controller');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/create',urlencodedParser, task_controller.task_create);
router.get('/:id', task_controller.findById);
router.get('/', task_controller.findAll);
router.put('/:id/update', task_controller.task_update);
router.put('/:id/state/:state', task_controller.state_update);
router.delete('/:id/delete', task_controller.task_delete);
module.exports = router;
  