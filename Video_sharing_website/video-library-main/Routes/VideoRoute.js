const express = require('express')

const { verifyToken } = require('../Middleware/verifyToken')
const { addVideo, singleVideo, allVideo, addView, addLike, addDislike, interactUser } = require('../Controllers/VideoController')

const router = express.Router()


router.get('/all', allVideo)
router.get('/:id', singleVideo)
router.put('/view/:id', addView)
router.post('/add', verifyToken, addVideo)
router.put('/like/:id', verifyToken, addLike)
router.get('/interact/:id', verifyToken, interactUser)
router.put('/dislike/:id', verifyToken, addDislike)

module.exports = router