const express = require('express');
const { findUser, getUsers, getListUsersId } = require('../controllers/user');

const router = express.Router();

router.get('/find/:userId', findUser)
router.get('/find_all', getUsers)
router.get('/list_usersId', getListUsersId)

module.exports = router;