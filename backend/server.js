import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import {  notFound } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import walletRouter from './routes/walletRoutes.js';

dotenv.config();
await connectDB();

const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api/wallet', walletRouter);
app.use(notFound);
// app.use(errorHandler);

const server = app.listen(
  console.log(`Server running  on port ${process.env.PORT} `)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`logged error: ${err}`);
  server.close(() => process.exit(1));
});
