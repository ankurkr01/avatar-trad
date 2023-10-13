const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const util = require('util');
const path = require('path');

// Configure AWS with credentials and options
AWS.config.update({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_AWS,
    secretAccessKey: process.env.ACCESS_SECRET_AWS,
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

// Configure multer for file upload to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + path.extname(file.originalname));
    },
  }),
}).single('image');

// Promisify the upload function
const promisifiedUpload = util.promisify(upload);

// Middleware function to handle file upload and move to the next middleware
const uploadMiddleware = async (req, res, next) => {
  try {
    await promisifiedUpload(req, res);
    next();
  } catch (error) {
    console.log('Error uploading file:', error.message);
  }
};

module.exports = { upload, uploadMiddleware };
