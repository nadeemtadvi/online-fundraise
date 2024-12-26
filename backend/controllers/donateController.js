import Razorpay from "razorpay";
import Donation from "../models/donateModel.js";
import mongoose from "mongoose";


const donateCreate = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);

    let existingDonation = await Donation.findOne({ paymentId: null });

    if (existingDonation) {
      existingDonation.orderId = order.id;
      existingDonation.amount = req.body.amount;
      existingDonation.name = req.body.name;
      existingDonation.mobile = req.body.mobile;
      existingDonation.status = "created";

      await existingDonation.save();
      res.json({
        order_id: order.id,
        amount: order.amount,
      });
    } else {
      const newDonation = new Donation({
        name: req.body.name,
        amount: req.body.amount,
        mobile: req.body.mobile,
        paymentId: null,
        orderId: order.id,
        status: "created",
      });

      await newDonation.save();

      res.json({
        order_id: order.id,
        amount: order.amount,
      });
    }
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).send("Internal Server Error: Unable to create order");
  }
};

const getDonation = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("Type of ID:", typeof id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
    const donation = await Donation.findById(id);

    console.log("Received paymentId: ", donation);
    if (!donation) {
      return res
        .status(404)
        .json({ error: "Donation not found in the database" });
    }

    res.status(200).json({
      name: donation.name,
      mobile: donation.mobile,
      amount: donation.amount / 100,
      status: donation.status,
      method: donation.method,
      paymentId: donation.paymentId,
      orderId: donation.orderId,
    });
  } catch (error) {
    console.error("Error fetching donation details:", error);

    res.status(500).json({
      error: "Internal Server Error: Unable to fetch donation details",
    });
  }
};

export { donateCreate, getDonation };
