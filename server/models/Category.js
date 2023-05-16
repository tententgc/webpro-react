const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    }
    , { timestamps: true }
);

const CategoryModel = mongoose.models.Category || mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;