var express = require('express');
const api = require('../controllers/update');
var router = express.Router();
var session = require('express-session')

// GET: http://localhost:3000/update
router.get('/', api.updatePageInfo);

// GET: http://localhost:3000/update/user/
router.get('/user/', api.getUserInfo);

module.exports = router;