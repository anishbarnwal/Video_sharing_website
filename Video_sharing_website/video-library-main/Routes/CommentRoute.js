const express = require('express')

const { verifyToken } = require('../Middleware/verifyToken')
const { addComment, getComment, addCommentLike, addCommentDislike } = require('../Controllers/CommentController')

const router = express.Router()

router.post('/add', addComment)
router.get('/:id', getComment)
router.put('/like/:id', verifyToken, addCommentLike)
router.put('/dislike/:id', verifyToken, addCommentDislike)

module.exports = router

