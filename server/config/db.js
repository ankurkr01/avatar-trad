const mongoose=require('mongoose')

// Bluid Database Connection By Mongoose Module

mongoose.connect('mongodb+srv://avtartrading:testing12@cluster0.ptkbalc.mongodb.net/avtar')
.then(()=>{
    console.log('Database Successfully Connect');
}).catch(()=>{
    console.log('MongoDB Error');
})

module.exports=mongoose