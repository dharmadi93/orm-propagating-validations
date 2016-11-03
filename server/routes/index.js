var express = require('express');
var router = express.Router();
var controller = require('../controllers/api.events')

/* GET home page. */


router.get('/', controller.getEvent)
router.post('/event/create', controller.addEvent)
router.delete('/event/delete/:id', controller.deleteEvent)


module.exports = router;
