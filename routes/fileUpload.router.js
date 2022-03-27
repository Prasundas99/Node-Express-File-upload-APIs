import express from "express";
import { fileUpload } from "../controller/fileUpload.controller.js";


const router = express.Router();

router.route('/file-upload',).post(fileUpload)

export default router