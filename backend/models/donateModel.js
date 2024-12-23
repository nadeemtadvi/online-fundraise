import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      unique: true,
      sparse: true,
    },
    orderId: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
    method: {
      type: String,
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);

export default Donation;
