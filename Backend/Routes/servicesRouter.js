import express from "express";
import servicesGET from "../Controllers/servicesGET.js";
import servicesPOST from "../Controllers/servicesPOST.js";
import servicesDELETE from "../Controllers/servicesDELETE.js";
import servicesPATCH from "../Controllers/servicesPATCH.js";
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

const servicesRouter = express.Router();
servicesRouter.get("/", servicesGET);

servicesRouter.post("/", upload.single("file"), servicesPOST());

servicesRouter.patch("/", servicesPATCH());

servicesRouter.delete("/:id", servicesDELETE);

export default servicesRouter;