import express from "express";
import generalGet from "../Controllers/generalController/generalGet.js";

const generalRouter = express.Router();

generalRouter.get("/", generalGet);
generalRouter.get("/api/v1", generalGet);

export default generalRouter;
