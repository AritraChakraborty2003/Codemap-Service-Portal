import mongoose from "mongoose";

const customSoftwareSchema = mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    Collection: "customsoftware",
  }
);

const customsoftwareModelObj = mongoose.model(
  "customsoftware",
  customSoftwareSchema
);
export default customsoftwareModelObj;
