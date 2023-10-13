const express=require('express')
const adminRouter=express()

// Import Admin Controllers 

const adminRgisterContoller=require('../controller/adminController/adminRegister')
const adminProductController=require('../controller/adminController/adminProduct')
const adminCategoriesController=require('../controller/adminController/adminCategories')
const adminSubCategoriesControllers=require('../controller/adminController/adminCategories')
const varifyAuth=require('../middleware/varifyToken')


// Multer Middleware for image upload 

const uploadImage=require('../middleware/multer')

//  Admin APIs

adminRouter.post('/admin-register',adminRgisterContoller.createAdmin)
adminRouter.post('/admin-login',adminRgisterContoller.loginAdmin)
adminRouter.get('/admin-dashboard',varifyAuth,adminRgisterContoller.adminDashboard)

// Admin Categories APIs

adminRouter.post('/add-categories',uploadImage.single('category_image'),adminCategoriesController.addCategories)
adminRouter.get('/get-categories',varifyAuth,adminCategoriesController.getCategories)
adminRouter.put('/edit-categories/:id',uploadImage.single('category_image'),varifyAuth,adminCategoriesController.editCategories)
adminRouter.delete('/delete-categories/:id',varifyAuth,adminCategoriesController.deleteCategories)

// admin sub Categories APIs

adminRouter.post('/add-sub-categories',varifyAuth,uploadImage.single('subCategories_image'),adminCategoriesController.addSubCategories)
adminRouter.put('/edit-sub-categories/:id',varifyAuth,uploadImage.single('subCategories_image'),adminCategoriesController.editSubCategories)
adminRouter.get('/get-sub-categories',varifyAuth,adminCategoriesController.getSubCategories)
adminRouter.delete('/delete-sub-categories/:id',varifyAuth,adminCategoriesController.deleteSubCategories)




// Admin Product APIs

adminRouter.post('/add-product',uploadImage.single('product_image'),adminProductController.addProduct)
adminRouter.get('/get-product',varifyAuth,adminProductController.getProduct)
adminRouter.put('/edit-product/:id',uploadImage.single('product_image'),varifyAuth,adminProductController.editProduct)
adminRouter.delete('/delete-product/:id',varifyAuth,adminProductController.deleteProduct)


module.exports=adminRouter  