const mongoose = require('mongoose')

const category = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category  required"],
        unique: [true, "Category must be unique"],
        minlength: 3,
        maxlenght: 32
    },
    // replace spaces between char by "-"
    slug: {
        type: String,
        lowercase: true,
    },
    image:String
},
    { timestamps: true }
)

// Model
const categoryModel = mongoose.model('Category', category)

module.exports = categoryModel