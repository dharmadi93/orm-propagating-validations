var express = require('express');
var router = express.Router();
var controller = require('../controllers/api.events')

/* GET home page. */


router.get('/', controller.getEvent)
router.post('/event/create', controller.addEvent)


module.exports = router;
