const productModel=require('../../model/adminModel/productModel')

let serverError={
    'success':false,
    "successCode":500,
    'message':'Internal Server Error',
}
//  add  Product By Admin 

const addProduct=async(req,resp)=>{
    try {
        const result= productModel({
            productName:req.body.productName,
            product_image:req.file.filename,
        })
        const saveData=await result.save()
        if (saveData) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Add Product Successfully ..!',
                "data":saveData,
            })
        } else {
            resp.send({
                'success':false,
                "successCode":400,
                'message':'Internal Server Error',
            })
        }
    } catch (error) {
        resp.send(serverError)
    }
}

//  get  Product By Admin 

const getProduct=async(req,resp)=>{
    try {
        const result=await productModel.find()
        if (result) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Get Product Successfully ..!',
                "data":result,
            })
        }
    } catch (error) {
      resp.send(serverError)
    }
}

//  edit product api by Admin

const editProduct=async(req,resp)=>{
      try {
        let editProduct = {}
        if (req.body.productName){   editProduct.productName = req.body.productName}
        if (req.file.filename){  editProduct.product_image = req.file.filename}
        let editData = await productModel.updateOne({ _id:req.params.id }, { $set: editProduct }, { new: true, lean: true })
        if (editData) {
            resp.send({ 
                'success':true,
                "successCode":200,
                'message':'Successfully Edit Categories ..!',
                "data":editData,
            })
        }
      } catch (error) {
        resp.send(serverError)
      }
}

//  delete  Product By Admin 

const deleteProduct=async(req,resp)=>{
    try {
       const result=await productModel.deleteOne({_id:req.params.id})
       if (result) {
          resp.send({
              'success':true,
              "successCode":200,
              'message':'Successfully Delete Product ..!',
          })
       }
    } catch (error) {
       resp.send(serverError)
    }
}

module.exports={
    addProduct,
    getProduct,
    editProduct,
    deleteProduct,
}