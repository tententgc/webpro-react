const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/User');

// Set up multer to save files to the server
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

router.post('/register', upload.single('profileImage'), async (req, res) => {
    const { username, email, password, description } = req.body;
    const profileImage = req.file.path;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword, description, profileImage });

    await user.save();
    res.sendStatus(201);
    console.log("User created successfully");
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        console.log("login successful")
        res.send({ token, user });
    } else {
        console.log("login failed")
        res.sendStatus(401);
    }
});

module.exports = router;
