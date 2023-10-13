const homePageBannerModel=require('../../model/homeModel/homePageBannerModel')
const homePageProductDisplayModel=require('../../model/homeModel/homePageProductDisplayModel')

let serverError={
    'success':false,
    "successCode":500,
    'message':'Internal Server Error',
}

// create homepage banner by admin

const createHomePageBanner=async(req,resp)=>{
    try {
        if(req.file){
            const result=homePageBannerModel({
                title:req.body.title,
                image: req.file.location,
            })
            const saveData=await result.save()
            if (saveData) {
                resp.send({
                    'success':true, 
                    "successCode":200,
                    'message':'Successfully save home page banner',
                    "data":saveData
                })
            }
        }
    } catch (error) {
        resp.send(serverError)
    }
}

// get home Page Banner

const getHomePageBanner=async(req,resp)=>{
    try {
       const result=await homePageBannerModel.find()
       if (result) {
         resp.send({
            'success':true,
            "successCode":200,
            'message':'Successfully get home page banner',
            "data":result
        })
       } 
    } catch (error) {
        resp.send(serverError)
    }
}

// delete  home pae banner by admin

const deleteHomePageBanner=async(req,resp)=>{
    try {
        const result=await homePageBannerModel.deleteOne({_id:req.params.id})
        if (result) {
            resp.send({
               'success':true,
               "successCode":200,
               'message':'Successfully delete home page banner',
               "data":result
           })
          } 
    } catch (error) {
        resp.send(serverError)
    }
}

// create homepage Product display by admin

const createHomePageProductDisplay=async(req,resp)=>{
    console.log(req.file)
    try {
        if(req.file){
            const result=new homePageProductDisplayModel({
                title:req.body.title,
                image: req.file.location,
            })
            const saveData=await result.save()
            if (saveData) {
                resp.send({
                    'success':true, 
                    "successCode":200,
                    'message':'Successfully save home page banner',
                    "data":saveData
                })
            }
        }
    } catch (error) {
        resp.send(serverError)
    }
}

// get home page product display 

const getHomePageProductDisplay=async(req,resp)=>{
    console.log(req);
    try {
        const result=await homePageProductDisplayModel.find() 
        if (result) {
            resp.send({
               'success':true,
               "successCode":200,
               'message':'Successfully get home page product display',
               "data":result
           })
          } 
    } catch (error) {
        resp.send(serverError)
    }
}

// delet home page product display 

const deleteHomePageProductDisplay=async(req,resp)=>{
    try {
        const result=await homePageProductDisplayModel.deleteOne({_id:req.params.id})
        if (result) {
            resp.send({
               'success':true,
               "successCode":200,
               'message':'Successfully delete home page product display',
               "data":result
           })
          } 
    } catch (error) {
        resp.send(serverError)
    }
}


module.exports={
    createHomePageBanner,
    getHomePageBanner,
    deleteHomePageBanner,
    createHomePageProductDisplay,
    getHomePageProductDisplay,
    deleteHomePageProductDisplay

}