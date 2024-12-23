import express from "express";
import { getDonation, donateCreate } from "../controllers/donateController.js";

const donateRouter = express.Router();

donateRouter.use(express.urlencoded({ extended: false }));

donateRouter.post("/create", donateCreate);
donateRouter.get("/getdonation/:paymentId", getDonation);

export default donateRouter;
