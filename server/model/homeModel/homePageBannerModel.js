const mongoose = require("mongoose");

const Schema=mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    }
})
const homePageBanner=mongoose.model('homePageBanner',Schema)
module.exports=homePageBanner