const bcrypt = require('bcrypt');
const AdminUser = require('../model/admin');
const crypto = require('crypto'); // Added crypto for token generation

// Create a new admin user
async function createAdminUser(req, res) {
  const { username, password } = req.body;

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);

    const adminUser = new AdminUser({
      username,
      password: passwordHash,
      salt,
    });

    await adminUser.save();

    res.status(201).json({ message: 'Admin user created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating admin user' });
  }
}

// Sign in an admin user using a GET request with credentials in the request body
async function signInAdminUserGet(req, res) {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find the user by username
    const user = await AdminUser.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const sessionToken = crypto.randomBytes(32).toString('hex');
    res.status(200).json({ message: 'Login successful', token: sessionToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}




module.exports = {
  createAdminUser,
  signInAdminUserGet,
};
