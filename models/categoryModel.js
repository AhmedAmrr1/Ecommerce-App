const mongoose = require('mongoose')

const category = new mongoose.Schema({
    name: String,
})

// Model
const categoryModel = mongoose.model('Category',category)

module.exports = categoryModel