import User from '../models/userModel.js';
import Wallet from '../models/walletModel.js';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

const walletCreate = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id: ', id);
    const user = await User.findById(id);

    console.log(user.id);

    user.isVerified = true;
    await user.save();
    const walletData = await Wallet.create({
      userId: user.id,
      type: 'investor',
      shareValue: 0,
      shareAmount: 0,
      totalValueShare: 0,
      project: 0,
      dividendTotal: 0,
    });

    console.log(walletData);
    return res
      .status(200)
      .json({ status: true, massage: 'Wallet has been successfully created.' });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
      massage: 'server facing some unknown error',
    });
  }
});

//@desc     wallet Getting
//@route    get /api/users/wallet/:id
//@access   Private
const getWallet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const isValidID = mongoose.Types.ObjectId.isValid(id);
  if (!isValidID) {
    res.status(430);
    throw new Error('invalid param id');
  }

  const wallet = await Wallet.findOne({ userId: id });

  if (!wallet) {
    res.status(200).json({
      status: true,
      message: 'Wallet does not exist with this id',
    });
  }

  console.log(wallet);

  res.status(200).json({
    status: true,
    wallet: wallet,
  });
});

export { walletCreate, getWallet };
