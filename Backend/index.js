import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DBConnectFunction } from "./Connection/DBConnectFunction.js";
import generalRouter from "./Routes/generalRouter.js";
import servicesRouter from "./Routes/servicesRouter.js";
import queryRouter from "./Routes/queryRouter.js";
import teamsRouter from "./Routes/teamsRouter.js";
import projectsRouter from "./Routes/projectsRouter.js";
import technologiesRouter from "./Routes/technologiesRouter.js";
import authenticationRouter from "./Routes/authenticationRouter.js";
import ApplyRouter from "./Routes/ApplyRouter.js";
import careerRouter from "./Routes/CareerRouter.js";
import partnershipRouter from "./Routes/partnershipRouter.js";
import { customsoftwareRouter } from "./Routes/customsoftwareRouter.js";
import { androidRouter } from "./Routes/androidRouter.js";
import { webDevelopmentRouter } from "./Routes/WebDevelopmentRouter.js";

dotenv.config();

//App Configuration
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("uploads"));

//DB Connection
DBConnectFunction(process.env.MONGODB_URI);

//Routes
app.use("/", generalRouter);
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/queries", queryRouter);
app.use("/api/v1/teams", teamsRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/technologies", technologiesRouter);
app.use("/api/v1/auth", authenticationRouter);
app.use("/api/v1/apply", ApplyRouter);
app.use("/api/v1/career", careerRouter);
app.use("/api/v1/partnership", partnershipRouter);
app.use("/api/v1/customsoftware", customsoftwareRouter);
app.use("/api/v1/android", androidRouter);
app.use("/api/v1/webdevelopment", webDevelopmentRouter);

//App Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };
