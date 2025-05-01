const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, default: 'customer' },
}, {
  collection: 'users' // force the collection name to 'users'
});

const User = mongoose.model('User', userSchema);

module.exports = User;