import express from "express";
import getApply from "../Controllers/ApplicationController/getApply.js";
import { postApply } from "../Controllers/ApplicationController/postApply.js";
import multer from "multer";
import fs from "fs";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const ApplyRouter=express.Router();

ApplyRouter.get("/",getApply);

ApplyRouter.post("/",upload.single("file"),postApply())

export default ApplyRouter;