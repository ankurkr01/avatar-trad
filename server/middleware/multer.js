const multer=require('multer')

// multer module use for image upload

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+"-"+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

module.exports=upload