const express = require('express');
const { getMessages, createMessage } = require('../controllers/message');

const router = express.Router();

router.post('/create', createMessage)
router.get('/all/:conversationId', getMessages)

module.exports = router;