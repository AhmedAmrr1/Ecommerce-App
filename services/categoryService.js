const express = require('express')
const categoryModel = require('../models/categoryModel')

exports.getCategory = ((req,res)=>{
    const name = req.body.name
    console.log(req.body)

    const newCategory = new categoryModel({name})
    newCategory.save()
     .then((doc)=>{
        res.json(doc)
    })
    .catch((err)=>{
        res.json(err)
    }) 

    }
)

