const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category:{
        type:String
    },
    instructor: {
        name: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
        } 
    },
    thumnailImage:{
        urlImage:String,
    },
    videos: [
        {
            title: {
                type: String,
            },
            videoUrl: {
                type: String,
            },
        },
    ],
})

module.exports = mongoose.model('courseUpload' , taskSchema)