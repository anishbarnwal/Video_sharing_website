const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserModel = require('../Models/User')

// Sign Up An User

const signUpUser = async (req, res) => {
    const { username, email, password, fullName } = req.body;

    if(!fullName || !username || !email || !password ) return res.status(401).json('Please, Fill All The Credential');

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword

    const newUser = new UserModel(req.body)

    try {
        const user = await newUser.save()

        const token = jwt.sign({
            username: user.username, id: user._id
        },process.env.JWT_SECRET_KEY,{expiresIn: '2h'})

        res.status(201).json({...user._doc, password: null, token, message: "Account created successfully.."})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Sign In An User

const signInUser = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) return res.status(401).json('Please, Fill All The Credential')

    try {
        const user = await UserModel.findOne({email})
        
        if(!user) return res.status(401).json('Invalid Credentials')
        
        const validity = await bcrypt.compare(password, user.password)
        
        if(!validity) return res.status(401).json('Invalid Credentials')

        const token = jwt.sign({
            username: user.username, id: user._id
        },process.env.JWT_SECRET_KEY,{expiresIn: '2h'})

        res.status(200).json({...user._doc, password: null, token, message: 'Logged in successfully...'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { signUpUser, signInUser }