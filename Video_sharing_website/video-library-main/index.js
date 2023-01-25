const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const AuthRoute = require('./Routes/AuthRoute')
const UserRoute = require('./Routes/UserRoute')
const VideoRoute = require('./Routes/VideoRoute')
const CommentRoute = require('./Routes/CommentRoute')



const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors())

// Server Setting

const PORT = process.env.PORT || 9090;
const server = app.listen(PORT, ()=> console.log(`Server is up and running on port: ${PORT}`));

// DB Setting

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }, (err) => {
    if(err) return console.log(err);
    console.log('MongoDB connected...')
   })


// Routes 

app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/video', VideoRoute)
app.use('/api/v1/user', UserRoute)
app.use('/api/v1/comment', CommentRoute)


// Deploying Frontend

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'views','build')))
        res.sendFile(path.resolve(__dirname,'views','build','index.html'))
    })
}
