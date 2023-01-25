const express = require('express')

const { userInfo } = require('../Controllers/UserController')

const router = express.Router()


router.get('/info/:id', userInfo)

module.exports = router