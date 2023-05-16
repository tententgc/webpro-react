const router = require("express").Router();
const Categories = require("../Models/Category");


//Create New Category
router.post("/", async (req, res) => {
    const newCat = new Categories(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//get all categories
router.get("/", async (req, res) => {
    try {
        const cats = await Categories.find();
        res.status(200).json(cats);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const cat = await Categories.findById(req.params.id);
        try {
            await cat.delete();
            res.status(200).json("Category has been deleted...");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }

});



module.exports = router; 