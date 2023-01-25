const express = require('express')

const { signUpUser, signInUser } = require('../Controllers/AuthController')

const router = express.Router()


router.post('/signup', signUpUser)
router.post('/signin', signInUser)

module.exports = router