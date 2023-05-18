const router = require('express').Router();
const User = require('../Models/User');
const Post = require('../Models/Post');
const bcrypt = require('bcrypt');

// Update
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

router.put("/:id", upload.single('profileImage'), async (req, res) => {

    console.log(req.body.userId, req.params.id)
    if (req.body.userId === req.params.id) {

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        // Update the profileImage path if a new file is uploaded
        if (req.file) {
            req.body.profileImage = req.file.path;
        }

        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updateUser);
        }

        catch (err) {
            res.status(500).json(err);
        }
    }

    else {
        res.status(401).json("You can update only your account!");
    }

});
//Delete 

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {

        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch (err) {
            req.status(404).json("User not found");
        }
    }
    else {
        res.status(401).json("You can delete only your account!");
    }

});

//Get Users

router.get("/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }

});



module.exports = router; 