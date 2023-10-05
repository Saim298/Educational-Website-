const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  image: String,
  expertise: [String],
  description:{
    type:String,
    required:true
  },
  
});

module.exports = mongoose.model('Instructor', instructorSchema);
