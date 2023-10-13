const adminRegister =require('../../model/adminModel/adminRegister')
const categoriesModel=require('../../model/adminModel/categoriesModel')
const productModel=require('../../model/adminModel/productModel')

const securePassword=require('../../other/hashPassword')
const createToken=require('../../other/createJWTToken')
const bcrypt=require('bcrypt')
const cookie=require('cookie-parser')
let serverError={
    'success':false,
    "successCode":500,
    'message':'Internal Server Error',
}
const createAdmin=async(req,resp)=>{
    try {
        const password=await securePassword(req.body.password)
        const result=adminRegister({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:password,
        })
        const saveData=await result.save()
        if (saveData) {
            resp.send({
                'success':true,
                "successCode":201,
                'message':'Successfully Register Admin',
                "data":saveData
            })
        } else {
            resp.send({
                'success':false,
                "successCode":200,
                'message':'Email is not exist',
            })
        }
    } catch (error) {
        resp.send(serverError)
    }
}
const loginAdmin=async(req,resp)=>{
    try {
        console.log(req.body);
        const checkEmail=await adminRegister.findOne({email:req.body.email})
        console.log(checkEmail);
        if (checkEmail) {
            const matchPassword=await bcrypt.compare(req.body.password,checkEmail.password)
            console.log(matchPassword);
            if (matchPassword===true) {
                const token =await createToken(checkEmail._id)
                resp.cookie('token', token, {
                    httpOnly: true,  
                    maxAge: 3600000, 
                });
                resp.send({
                    'success':true,
                    "successCode":200,
                    'message':'Admin Successfully Login',
                    "data":checkEmail,
                    "token":token
                })
            } else {
                resp.send({
                    'success':false,
                    "successCode":400,
                    'message':'Password is not matched',
                })
            }
        } else {
            resp.send({
                'success':false,
                "successCode":400,
                'message':'Email address is not exist',
            })
        }
    } catch (error) {
        resp.send(serverError)
    }
}
const adminDashboard=async(req,resp)=>{
    try {
        const result=await adminRegister.findOne({_id:req._id})
        if (result) {
            resp.send({
                    'success':true,
                    "successCode":200,
                    'message':'Admin Dashboard Successfully Loaded',
                    "data":result,
                })
        }
    } catch (error) {
        resp.send(serverError)
    }
}


module.exports={
    createAdmin,
    loginAdmin,
    adminDashboard,
}