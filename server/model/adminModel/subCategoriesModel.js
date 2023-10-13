const mongoose=require('mongoose')

// categories add schema 

const schema=mongoose.Schema({
    subCategories_name:{
        type:String,
        require:true,
    },
    categoryName:{
        type:String,
        require:true,
    },
    category_ID:{
        type:String,
        require:true, 
    },
    subCategories_image:{
        type:String,
        required:true
    },
},{
    timestamps:true
}
)

const subCategories=mongoose.model('subCategories',schema)
module.exports = subCategories