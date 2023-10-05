const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer

// Import your controller and any other necessary imports
const {
    getAllfunction,
    createTask,
    getTask,
    updateTasks,
    deleteTasks,
    addVideoToCourse, // Import the new controller function
    getCourseWithVideos, // Import the new controller function
} = require('../controllers/courseUpload');

// Set up multer storage for video uploads
const videoStorage = multer.memoryStorage();
const videoUpload = multer({ storage: videoStorage });

// Get all courses
router.get('/courseUpload', getAllfunction);

// Get a specific course by ID
router.get('/courseUpload/:id', getTask);

// Create a new course with video upload
router.post('/courseUpload', videoUpload.single('videoFile'), createTask);

// Update a specific course by ID
router.patch('/courseUpload/:id', updateTasks);

// Delete a specific course by ID
router.delete('/courseUpload/:id', deleteTasks);

// Add a video to a specific course by ID
router.patch('/courseUpload/:id/addVideo', videoUpload.single('videoFile'), addVideoToCourse);

// Get a specific course with videos by ID
router.get('/courseUpload/:id/videos', getCourseWithVideos);

module.exports = router;
