const express = require('express');
const router = express.Router();
const Instructor = require('../model/instructor');
const upload = require('../config/multer');
const fs = require('fs');

// Function to encode a file to Base64
const encodeFileToBase64 = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return Buffer.from(fileData).toString('base64');
};

// POST: Create a new instructor with an image (Base64 encoded)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, expertise, description } = req.body;

    let imageBase64 = null;
    if (req.file) {
      const filePath = req.file.path;
      imageBase64 = encodeFileToBase64(filePath);
      fs.unlinkSync(filePath); // Optionally, you can delete the uploaded file from the server after encoding it
    }

    const instructor = new Instructor({
      name,
      expertise: expertise.split(','), // Convert expertise string to an array
      image: imageBase64, // Save the image as a Base64 encoded string
      description,
    });

    await instructor.save();
    res.status(201).json(instructor);
  } catch (err) {
    res.status(500).json({ error: 'Could not create instructor' });
  }
});

module.exports = router;
