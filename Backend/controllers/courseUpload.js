const Course = require('../model/courseUpload');
const multer = require('multer');

const getAllfunction = async (req, resp) => {
    try {
        const task = await Course.find({});
        resp.status(200).json({ task });
    } catch (error) {
        resp.status(500).json({ msg: error });
    }
}

// Set up multer storage for video uploads
const videoStorage = multer.memoryStorage();

const createTask = async (req, resp) => {
    try {
        // Check if a video file was uploaded
        if (!req.file) {
            return resp.status(400).json({ msg: 'Video file is required.' });
        }

        const { name, description, price, instructor, thumnailImage, videos } = req.body;

        // Create a new video object
        const video = {
            title: req.body.videoTitle,
            videoUrl: req.file.buffer.toString('base64'), // Store the video content as base64
        };

        // Use let for videos to allow reassignment
        let videosArray = videos;

        // Make sure that the videos property is an array
        if (!Array.isArray(videosArray)) {
            videosArray = [videosArray];
        }

        const task = await Course.create({
            name,
            description,
            price,
            instructor,
            thumnailImage,
            videos: [video, ...videosArray], // Add the new video to the existing videos
        });

        resp.status(201).json({ task });
        console.log(task);
    } catch (error) {
        resp.status(500).json({ msg: error.message });
    }
}

const addVideoToCourse = async (req, resp) => {
    try {
        const { id: courseId } = req.params;
        const { videoTitle } = req.body;
        
        // Check if a video file was uploaded
        if (!req.file) {
            return resp.status(400).json({ msg: 'Video file is required.' });
        }

        const video = {
            title: videoTitle,
            videoUrl: req.file.buffer.toString('base64'), // Store the video content as base64
        };

        const course = await Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { videos: video } },
            { new: true }
        );

        if (!course) {
            return resp.status(404).json({ msg: 'Course not found' });
        }

        resp.status(200).json(course);
    } catch (error) {
        resp.status(500).json({ msg: error.message });
    }
};

// Get a single course with videos
const getCourseWithVideos = async (req, resp) => {
    try {
        const { id: courseId } = req.params;
        const course = await Course.findOne({ _id: courseId });

        if (!course) {
            return resp.status(404).json({ msg: 'Course not found' });
        }

        resp.status(200).json(course);
    } catch (error) {
        resp.status(500).json({ msg: error.message });
    }
};




const getTask = async (req, resp) => {
    try {
        const {id:taskID} = req.params
        const task = await Course.findOne({_id:taskID})
        if (!task) {
            resp.status(404).send(`Not found ${taskID}`)
        }
        resp.status(200).json(task)
    } catch (error) {
        resp.status(500).json({msg:error })
        console.log(error);
    }
}
const updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Course.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ msg: "Not found" });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ msg: "Internal server error" });
    }
};

const deleteTasks = async (req, resp) => {
    try {
        const {id:taskID} = req.params
        const task = await Course.findOneAndDelete({_id:taskID})
        if (!task) {
            resp.status(404).send(`Not found ${taskID}`)
        }
        resp.status(200).json(task)

    } catch (error) {
        resp.status(500).json({msg:`It seems an error ${error}`})
    }
}

module.exports = {
    getTask,
    updateTasks,
    deleteTasks,
    getAllfunction,
    createTask,
    addVideoToCourse, // Add this line for PATCH video
    getCourseWithVideos, // Add this line for GET course with videos
};