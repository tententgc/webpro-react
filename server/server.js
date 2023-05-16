// server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute); 

app.get('/users', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

app.listen(3001);
