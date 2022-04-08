import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
dotenv.config();

const bucket = process.env.AWS_S3_BUCKET;
const acl = process.env.acl;

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

/**
 * upload file to aws s3
 * @param {*} file
 */
const uploadFileToAws = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    acl: acl,
    key: function (request, file, cb) {
      console.log(file);
      cb(null, Date.now() + file.originalname);
    },
  }),
  limits: { fileSize: 80000000 }, // 80MB
}).single("file");



/**
 * @description: This function is used to upload a file to firebase storage
 * @route POST /api/file-upload
 * @access Public
 * @upload  {file: uploadmedia}
 */
export const awsFileUpload = (req, res) => {
    console.log(process.env.AWS_ACCESS_ID);
console.log(process.env.AWS_SECRET_KEY);
  uploadFileToAws(req, res, async function (error) {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    return res.json({ success: true, file_link: req.file.location });
  });
};
