import express from 'express';
import { donatehook, donateCreate } from '../controllers/donateController.js';


const donateRouter = express.Router();

donateRouter.use(
  express.urlencoded({
    extended: false,
  })
);

donateRouter.route('/donate/:id').post(donateCreate).get(donatehook);

export default donateRouter;
