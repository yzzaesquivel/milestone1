const User = require('./models/User');
const Product = require('./models/Product');

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { firstName, middleName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create and save new user (plain-text password)
    const newUser = new User({
      firstName,
      middleName,
      lastName,
      email,
      password, // NO hashing
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Signup failed' });
  }
};

// Login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Dummy: Get all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
