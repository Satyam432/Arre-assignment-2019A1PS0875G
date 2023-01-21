const express = require('express');

const chatController = require('../controllers/chat');

const router = express.Router();

router.get('/:groupId/messages', chatController.getMessagesPaginated);
router.post('/:groupId/messages', chatController.createMessage);

module.exports = router;
