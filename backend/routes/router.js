const express = require('express');
const router = new express.Router();


//auth
const { authAddUser } = require('../controllers/auth');
router.post('/auth/add/user',authAddUser)


module.exports = router