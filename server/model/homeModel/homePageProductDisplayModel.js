const { default: mongoose } = require("mongoose");

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
const homePageProductDisplay=mongoose.model('homePageProductDisplay',Schema)
module.exports=homePageProductDisplay