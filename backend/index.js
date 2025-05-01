// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/AGRIDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

routes(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); // Assuming `Product` is your Mongoose model
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

