const express = require('express');
const app = express();
const connectDb = require('./DB/db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const adminRoutes = require("./routes/adminRoutes")
const instructorRoute = require("./controllers/instructor")
const routes = require('./routes/courseUpload'); // Import your routes
require('dotenv').config();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', routes); // Use your defined routes
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/v1/course', routes);
app.use('/admin', adminRoutes);
app.use('/instructorProfile', instructorRoute);

app.get('/', (req, resp) => {
  resp.send(`<h1>Welcome to our page</h1>`);
});


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
