const mongoose=require('mongoose')

// categories add schema 

const schema=mongoose.Schema({
    categoryName:{
        type:String,
        require:true,
    },
    category_image:{
        type:String,
        require:true,
    },
},{
    timestamps:true
}
)

const categories=mongoose.model('categories',schema)
module.exports = categories