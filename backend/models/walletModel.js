import mongoose from "mongoose";

const walletBankSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  campaign: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});

const Wallet = mongoose.model("WalletBank", walletBankSchema);

export default Wallet;
