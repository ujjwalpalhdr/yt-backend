import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      Trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,

      Trim: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      Trim: true,
    },
    avtar: {
      type: String, // cloudnary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
