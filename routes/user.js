const express = require('express');
const { findUser, getUsers } = require('../controllers/user');

const router = express.Router();

router.get('/find/:userId', findUser)
router.get('/find_all', getUsers)

module.exports = router;