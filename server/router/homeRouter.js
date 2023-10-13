const express=require('express')
const homeRouter=express()
const homePageController=require('../controller/homeController/homePageController')
const upload=require('../middleware/multer')
const uploadMulter=require('../middleware/multerS3')

const cors=require('cors')
homeRouter.use(cors());

// homepage Banner handle APIs

homeRouter.post('/create-homepage-banner',uploadMulter.uploadMiddleware,homePageController.createHomePageBanner)
homeRouter.get('/get-homepage-banner',homePageController.getHomePageBanner)
homeRouter.delete('/delete-homepage-banner/:id',homePageController.deleteHomePageBanner)

// homepage display Product handle APIs

homeRouter.post('/create-homepage-product',uploadMulter.uploadMiddleware,homePageController.createHomePageProductDisplay)
homeRouter.get('/get-homepage-product',homePageController.getHomePageProductDisplay)
homeRouter.delete('/delete-homepage-product/:id',homePageController.deleteHomePageProductDisplay)


module.exports=homeRouter
