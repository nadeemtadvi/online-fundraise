import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
	name: String,
	email: String,
	amount: Number,
	paymentId: String,
	status: { type: String, default: 'Pending' },
	date: { type: Date, default: Date.now },
});
const donate = mongoose.model("donateBank", donationSchema);

export default donate;
