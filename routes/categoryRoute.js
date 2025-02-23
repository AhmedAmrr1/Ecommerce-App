const express = require('express')
const {getCategory, createCategory, getCategories, updateCategory , deleteCategory} = require('../services/categoryService')

const router = express.Router()



router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)



module.exports = router