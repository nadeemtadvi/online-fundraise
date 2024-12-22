import express from 'express';
import path from 'path';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import multer from 'multer';
import {
  authUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';

import { appendFile } from 'fs';

const userRouter = express.Router();

const __dirname = dirname(fileURLToPath(import.meta.url));

const UPLOAD_PATH = join(__dirname, '../', './upload');

userRouter.use(
  express.urlencoded({
    extended: false,
  })
);
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_PATH);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const checkFileType = (file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
};

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});



userRouter.post('/login', authUser);

userRouter
  .route('/')
  .post(
    upload.fields([]),
    registerUser
  )
  .get( getAllUsers);

userRouter.route('/profile/:id').get(getUserProfile).put(updateUserProfile);

userRouter.route('/:id').delete(deleteUser);

export default userRouter;
