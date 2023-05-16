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
const multer = require('multer'); 
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });




app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoute); 
app.use('/api/posts', postRoute); 



app.listen(3001);
