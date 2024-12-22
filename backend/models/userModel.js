import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: { type: String, enum: ["user", "admin"], default: "user" },

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: true,
    },
    contributions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "WalletBank" },
    ],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

const User = mongoose.model("User", userSchema);
export default User;
