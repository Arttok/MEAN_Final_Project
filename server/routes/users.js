var express = require('express');
const api = require('../controllers/user');
var router = express.Router();

// GET: http://localhost:3000/users/
router.get('/', api.list);

//PUT: http://localhost:3000/users/
router.put('/', api.update);

// POST: http://localhost:3000/users/register
router.post('/register', api.register);

// DELETE: http://localhost:3000/users/{user_id}
router.delete('/:user_id', api.delete);

// GET: http://localhost:3000/users/signin
router.post('/signin', api.signin);

module.exports = router;