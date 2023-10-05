const multer = require('multer');
const path = require('path');

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    cb(null, `${Date.now()}${fileExt}`); // Define the file name with a timestamp
  },
});

// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
