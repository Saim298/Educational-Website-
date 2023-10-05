const mongoose = require('mongoose')

const connectDb = (url)=>{
   
    return mongoose.connect(url ,  console.log("connected"))
}

module.exports = connectDb