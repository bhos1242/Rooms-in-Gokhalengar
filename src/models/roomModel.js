import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  accommodationType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rent: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  lightBillIncluded: {
    type: Boolean,
    default: false,
  },
  posterEmail: {
    type: String,
    required: true,
  },
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
