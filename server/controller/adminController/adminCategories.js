const categoriesModel=require('../../model/adminModel/categoriesModel')
const subCategoriesModel=require('../../model/adminModel/subCategoriesModel')

let serverError={
    'success':false,
    "successCode":500,
    'message':'Internal Server Error',
}
//  Add  Categories By Admin 

const addCategories=async(req,resp)=>{
    try {
        const result= categoriesModel({
            categoryName:req.body.categoryName,
            category_image:req.file.filename,
        })
        const saveData=await result.save()
        if (saveData) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Add Catogories Successfully ..!',
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
        resp.send({
            'success':false,
            "successCode":500,
            'message':'Internal Server Error',
            "error":error.message
        })
    }
}

//  get  Categories By Admin 

const getCategories=async(req,resp)=>{
      try {
        const result=await categoriesModel.find()
        if (result) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Get Categories Successfully ..!',
                "data":result,
            })
        }
      } catch (error) {
        resp.send(serverError)
      }
}

// edit Categories By Admin

const editCategories=async(req,resp)=>{
      try {
        let editCategories = {}
        if (req.body.categoryName){  editCategories.categoryName = req.body.categoryName}
        if (req.file.filename){  editCategories.category_image= req.file.filename}
        let editData = await categoriesModel.updateOne({ _id:req.params.id }, { $set: editCategories }, { new: true, lean: true })
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

//  delete  Categories By Admin 

const deleteCategories=async(req,resp)=>{
    try {
       const result=await categoriesModel.deleteOne({_id:req.params.id})
       if (result) {
          resp.send({
              'success':true,
              "successCode":200,
              'message':'Successfully Delete Categories ..!',
          })
       }
    } catch (error) {
       resp.send(serverError)
    }
}

// add sub Categories by admin 

const addSubCategories=async(req,resp)=>{
    try {
        const findCategory=await categoriesModel.findOne({_id:req.body.category_ID})
        if (findCategory) {
            const subCategories=subCategoriesModel({
                subCategories_name:req.body.subCategories_name,
                categoryName:findCategory.categoryName,
                category_ID:findCategory._id,
                subCategories_image:req.file.filename
            })
            const savaData=await subCategories.save()
            if (savaData) {
                resp.send({
                    'success':true,
                    "successCode":200,
                    'message':'Successfully add Sub Categories ..!',
                    "data":savaData
                })
            } 
        } 
    } catch (error) {
       resp.send(serverError)
    }
}

// edit sub categories by admin

const editSubCategories=async(req,resp)=>{
    try {
      let editSubCategories = {}
      if (req.body.subCategories_name){  editSubCategories.subCategories_name = req.body.subCategories_name}
      if (req.body.categoryName){  editSubCategories.categoryName = req.body.categoryName}
      if (req.body.category_ID){  editSubCategories.category_ID = req.body.category_ID}
      if (req.file.filename){  editSubCategories.subCategories_image= req.file.filename}
      let editData = await subCategoriesModel.updateOne({ _id:req.params.id }, { $set: editSubCategories }, { new: true, lean: true })
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

// get sub categories by admin 

const getSubCategories=async(req,resp)=>{
    try {
        const result=await subCategoriesModel.find()
        if (result) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Successfully get Sub Categories ..!',
                "data":result,
            })
        }
    } catch (error) {
      resp.send(serverError)
    }
}

//  delete sub calegories by admin 

const deleteSubCategories=async(req,resp)=>{
    try {
        const result=await subCategoriesModel.deleteOne({_id:req.params.id})
        if (result) {
            resp.send({
                'success':true,
                "successCode":200,
                'message':'Successfully delete Sub Categories ..!',
                "data":result,
            })
        }
    } catch (error) {
      resp.send(serverError)
    }
}

module.exports={
    addCategories,
    getCategories,
    editCategories,
    deleteCategories,
    addSubCategories,
    editSubCategories,
    getSubCategories,
    deleteSubCategories,
}