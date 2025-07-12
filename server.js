// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(express.static('public')); // Serve HTML, CSS, JS

// mongoose.connect('mongodb://localhost:27017/registrations', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB error:', err));

// // User schema
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     email:    { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// const User = mongoose.model('User', userSchema);

// // Register route
// app.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const newUser = new User({ username, email, password });
//         await newUser.save();
//         res.status(201).json({ message: 'Registration successful!' });
//     } catch (err) {
//         if (err.code === 11000) {
//             res.status(400).json({ message: 'Username or email already exists' });
//         } else {
//             res.status(500).json({ message: 'Server error' });
//         }
//     }
// });

// // Login route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'User not found' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid password' });

//     res.status(200).json({ message: 'Login successful!' });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });
