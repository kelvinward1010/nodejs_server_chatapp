const express = require('express');
const { createConversation, findConversation, getConversations } = require('../controllers/conversation');

const router = express.Router();

router.post('/create', createConversation)
router.get('/all/:userId', getConversations)
router.get('/find/:conversationId', findConversation)

module.exports = router;