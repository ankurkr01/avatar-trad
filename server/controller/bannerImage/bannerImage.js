const bannermodel = require('../../model/bannerImageModel/bannerModel')

const express = require('express')
const cloudinary = require('cloudinary').v2;

exports.uploadbanner = async(req, res)=>{
    try {
const file = req.files.images;
// console.log(file);
     
      cloudinary.uploader.upload(file.tempFilePath, (err, result)=>{

// console.log(result);

      })
      
       


        // const banner = await bannermodel.create(req.body);
        // res.status(201).json({success:true, banner})
        
        
    } catch (error) {
        res.send(error)
    }
}


exports.getBannerImg = async(req, res)=>{
    try {

        const images = await bannermodel.find()
        
    } catch (error) {
        res.send(error)
    }
}