const VideoModel = require('../Models/Video')
const UserModel = require('../Models/User')

// Adding Video   

const addVideo = async (req, res) => {
    
    const newVideo = new VideoModel(req.body)
    try {
        const video = await newVideo.save();
        res.status(200).json({video})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get Single Video

const singleVideo = async (req, res) => {
    try {
        const video = await VideoModel.findById(req.params.id)
        res.status(200).json(video)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

// Get All video

const allVideo = async (req, res) => {
    try {
        const video = await VideoModel.find()
        res.status(200).json({video})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Increasing Video view

const addView = async (req, res) => {
    try {
        const video = await VideoModel.findById(req.params.id)
        video.views++;
        await video.save();
        res.status(200).json(video)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

// Video Like

const addLike = async (req, res) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
        const video = await VideoModel.findById(videoId)

        const index = video.likes.findIndex((id) => id === userId);
          if (index === -1) {
            video.likes.push(userId);
            video.dislikes = video.dislikes.filter((id) => id !== userId);
          } else {
            video.likes = video.likes.filter((id) => id !== userId);
          }

        await video.save();
        res.status(200).json(video)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

// Video Dislike

const addDislike = async (req, res) => {
    const userId = req.user.id;
    const videoId = req.params.id;
    try {
        const video = await VideoModel.findById(videoId)

        const index = video.dislikes.findIndex((id) => id === userId);
          if (index === -1) {
            video.dislikes.push(userId);
            video.likes = video.likes.filter((id) => id !== userId);
          } else {
            video.dislikes = video.dislikes.filter((id) => id !== userId);
          }

        await video.save();

        res.status(200).json(video)
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

// Like Dislike Detail

const interactUser = async (req, res) => {
    try {
        const video = await VideoModel.findById(req.params.id)
        const { likes, dislikes } = video;
        const likedUser = await UserModel.find({ _id: likes})
        const dislikedUser = await UserModel.find({ _id: dislikes })
        res.status(200).send({likedUser, dislikedUser})        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

module.exports = {addVideo, singleVideo, allVideo, addView, addLike, addDislike, interactUser}