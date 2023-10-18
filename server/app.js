const express=require('express')
const app=express()
const path=require('path')
const connectDB = require('./config/db')


require('./config/db')     // database connection import 

const dotenv=require('dotenv')
dotenv.config({path:'./config/.env'})

// database 
connectDB()

// cors Module import  

const cors=require('cors')
app.use(cors());

// cookie parser module import for cookie handle

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// body parser module import 

const bodyParser=require('body-parser')
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// producation 
 
app.use(express.json())
const _dirname=path.dirname("")
const buildpath=path.join(_dirname,"../client/build")
app.use(express.static(buildpath))
app.use(
    cors({
        "origin":"*"
    })
);

// Admin Routing

const adminRouter=require('./router/adminRouter')
app.use('/api/admin',adminRouter)

// home page Routing 

const homeRouter=require('./router/homeRouter')
app.use('/api/',homeRouter)
app.get('/',(req,res)=>{
    res.send('hiiii')
})

// Server  Listening port No 5000 

const PORT=process.env.PORT||6000

app.listen(PORT,()=>{
    console.log(`Server is running port no ${PORT}`);
})