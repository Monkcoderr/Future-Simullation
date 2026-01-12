import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    degree: {
      type: String,
      required: true
    },

    year: {
      type: Number
    },

    country: {
      type: String
    },

    skills: [String],

    interests: [String]
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
