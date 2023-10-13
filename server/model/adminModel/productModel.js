const mongoose=require('mongoose')

//  product add Schema 

const schema=mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    product_image:{
        type:String,
        require:true,
    },
},{
    timestamps:true
}
)

const product=mongoose.model('product',schema)
module.exports = product