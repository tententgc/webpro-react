// server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/categories');
const postRoute = require('./routes/posts');

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/posts', postRoute);

app.listen(3001);
