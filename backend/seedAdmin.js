// const mongoose = require('mongoose');
// const User = require('./models/User');

// mongoose.connect('mongodb://127.0.0.1:27017/farmtotableDB')
//   .then(async () => {
//     const admin = await User.findOne({ email: 'admin@da.gov' });
//     if (!admin) {
//       await User.create({
//         firstName: 'DA',
//         middleName: '',
//         lastName: 'Admin',
//         email: 'admin@da.gov',
//         password: 'admin123',
//         userType: 'admin'
//       });
//       console.log('Admin user created');
//     } else {
//       console.log('Admin already exists');
//     }
//     mongoose.disconnect();
//   })
//   .catch(err => console.error(err));
