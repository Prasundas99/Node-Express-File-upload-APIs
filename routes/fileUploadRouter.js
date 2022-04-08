import express from "express";
import { awsFileUpload } from "../controller/awsfileUpload.controller.js";
import { firebaseFileUpload } from "../controller/firebaseFileUpload.controller.js";


const router = express.Router();

router.route('/aws',).post(awsFileUpload)
router.route('/firebase',).post(firebaseFileUpload)
router.route('/gcp',).post(fileUpload)

export default router