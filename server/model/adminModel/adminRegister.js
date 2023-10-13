const mongoose=require('mongoose')

// admin Register schema 

const schema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    mobile:{
        type:Number,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    is_varify:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
}
)

const adminRegister=mongoose.model('adminregister',schema)
module.exports = adminRegister