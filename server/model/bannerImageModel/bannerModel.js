const mongoose=require('mongoose')


const schema=mongoose.Schema({

    images:[
        {
            public_id:{
                type:String,
                require:true
            },
            url:{
                type:String,
                require:true
            }
        }
    ]
  
}
)

const banner=mongoose.model('banner',schema)
module.exports = banner