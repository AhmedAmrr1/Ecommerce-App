const asyncHandler = require('express-async-handler')
const categoryModel = require('../models/categoryModel')
const slugify = require('slugify')



// @desc  Get List of categories
// @route   GET  /api/v1/categories
// @access  Public

exports.getCategories = asyncHandler(async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit
    const categories = await categoryModel.find({}).skip(skip).limit(limit)
    res.status(200).json({ result: categories.length, page, data: categories })

})

// @desc    Get List of categories
// @route   GET  /api/v1/categories
// @access  Public

exports.getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const category = await categoryModel.findById(id)
    if (!category) {
        res.status(404).json({ msg: `no category with this id ${id} ` })
    }
    res.status(200).json({ data: category })
})


// @desc    Create new category
// @route   POST  /api/v1/categories
// @access  Private

exports.createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name
    const category = await categoryModel.create({ name, slug: slugify(name) })
    res.status(201).json({ data: category })
})

// @desc    update Specific Category
// @route   PUT  /api/v1/categories/:id
// @access  Private

exports.updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const category = await categoryModel.findOneAndUpdate(
        { _id: id },
        { name, slug: slugify(name) },
        { new: true })

    if (!category) {
        res.status(404).json({ msg: `no category with this id ${id} ` })
    }
    res.status(200).json({ data: category })

}

)

// @desc    Delete Specific Category
// @route   DELETE  /api/v1/categories/:id
// @access  Private

exports.deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const category = await categoryModel.findByIdAndDelete(id)
    if (!category) {
        res.status(404).json({ msg: `no category with this id ${id} ` })
    }
    res.status(200).json({ msg: "Category is Deleted Succefully" })

})