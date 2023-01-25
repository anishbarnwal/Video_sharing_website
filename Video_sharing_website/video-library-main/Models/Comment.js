const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    writerName: {
        type: String,
        required: true
    },
    responseTo: {
        type: String
    },
    comment: {
        type: String,
        required: true,
    },
    likes: {
        type: [String],
        default: []
    },
    dislikes: {
        type: [String],
        default: []
    }
}, { timestamps:true })

const CommentModel = mongoose.model('Comment', CommentSchema)

module.exports = CommentModel;