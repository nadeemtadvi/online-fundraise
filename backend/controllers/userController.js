import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import {
  loginValidation,
  registerValidation,
} from '../validation/usersValidation.js';



const registerUser = asyncHandler(async (req, res) => {
 
  const { errors, hasErrors } = registerValidation(req.body);

  //This Blocks runs if validation fails
  if (hasErrors) {
    res.status(400);
    throw new Error(errors);
  }

  const { email, password } = req.body;

  const user = await User.exists({ email });

  if (user) {
    res.status(409);
    throw new Error('This email address already in use');
  }

  const newUser = new User(req.body);
  const salt = bcrypt.genSaltSync(10);
  newUser.password = bcrypt.hashSync(password, salt);

  await newUser.save();

  res?.status(201).json({ status: true, massage: 'User has been created' });
});


const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req?.body;

  const { errors, hasErrors } = loginValidation(req.body);

  //This Blocks runs if validation fails
  if (hasErrors) {
    res?.status(400);
    throw new Error(errors);
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('user does not exist');
  }

  const isMatched = bcrypt.compareSync(password, user.password);

  // this blocks runs of password does not match
  if (!isMatched) {
    res.status(401);
    throw new Error('incorrect password');
  }

  

  const {
    _id,
    // role,
    firstName,
    lastName,
    // phone,

    token,
  } = user;
  return res
    .cookie('access_token', token, { httpOnly: true, sameSite: true })
    .json({
      status: true,
      data: {
        id: _id,
        // type,
        firstName,
        lastName,
        // phoneNo,

        email,
        token,
      },
    });
});


const getUserProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const isValidID = mongoose.Types.ObjectId.isValid(id);

  /*blocks runs if params id is not valid */
  if (!isValidID) {
    res.status(422);
    throw new Error('invalid param id');
  }

  const user = await User.findById(id);
  const {
    
    email,
  
    firstName,
    lastName,
  } = user;

  res.status(200).json({
    status: true,
    user: {
      
      phoneNo,
      email,
      firstName,
      lastName,
      
    },
  });
});

//@desc     Update user profile
//@route    PUT /api/users/profile/:id
//@access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    if (!firstName && !lastName) {
      res.status(400).json('There are nothing to update');
    }
    User.findByIdAndUpdate(id, { firstName, lastName }, (err, user) => {
      if (err) {
        res.status(409).json({ status: false, massage: err.message });
      } else {
        res
          .status(200)
          .json({ status: true, massage: 'User Profile has been update' });
      }
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      error: err,
      massage: 'server facing some unknown error',
    });
  }
});

//@desc     Get all users
//@route    GET /api/users
//@access   Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');
  res.status(200).json({ status: true, users: users });
});

//@desc     Delete user
//@route    DELETE /api/users/:id
//@access   Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const isValidID = mongoose.Types.ObjectId.isValid(id);

  /*blocks runs if params id is not valid */
  if (!isValidID) {
    res.status(422);
    throw new Error('invalid param id');
  }

  const record = await User.deleteOne({ _id: id });
  if (record && record.deletedCount > 0)
    res.status(200).json({ status: true, massage: 'User has been deleted' });
  else {
    res.status(404).json({ status: true, massage: 'user does not exist' });
  }
});

//@desc     wallet Create
//@route    post /api/users/wallet/:id
//@access   Private

export {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
};
