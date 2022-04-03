import express from "express";
import { fileUpload } from "../controller/fileUpload.controller.js";
import { firebaseFileUpload } from "../controller/firebaseFileUpload.controller.js";


const router = express.Router();

router.route('/aws/file-upload',).post(fileUpload)
router.route('/firebase/file-upload',).post(firebaseFileUpload)
router.route('/gcp/file-upload',).post(fileUpload)

export default router