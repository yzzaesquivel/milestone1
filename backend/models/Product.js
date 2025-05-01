const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: String, // Product ID
  name: String, // Product Name
  description: String, // Product Description
  type: Number, // 1 = Crop, 2 = Poultry
  quantity: Number, // Product Quantity
}, {
  collection: 'products' // Name of the MongoDB collection
});

module.exports = mongoose.model('Product', productSchema);
