import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import {  notFound } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import donateRouter from './routes/donateRoutes.js';
import bodyParser from 'body-parser';
import Stripe from 'stripe';

dotenv.config();
await connectDB();
const stripeInstance = Stripe(STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors('*'));
app.use(cookieParser());
app.use('/api/donate', donateRouter);
app.use(notFound);
// app.use(errorHandler);

const server = app.listen(
  console.log(`Server running  on port ${process.env.PORT} `)
);
process.on('unhandledRejection', (err, promise) => {
  console.log(`logged error: ${err}`);
  server.close(() => process.exit(1));
});
