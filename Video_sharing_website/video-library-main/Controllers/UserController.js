const UserModel = require('../Models/User')
const VideoModel = require('../Models/Video')



// Getting User Info + User's Video

const userInfo = async (req, res) => {

    try {
        const user = await UserModel.findById(req.params.id)
        
        if(!user) return res.status(401).json('User Not Found!')
        
        const video = await VideoModel.find({userId: req.params.id})

        res.status(200).json({...user._doc, password: null, video})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { userInfo }