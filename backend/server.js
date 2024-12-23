import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import donateRouter from "./routes/donateRoutes.js";
import bodyParser from "body-parser";

dotenv.config();

await connectDB();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(cookieParser());

app.use("/api/donate", donateRouter);

app.get("/", (req, res) => {
  res.send("Backend ");
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Unhandled rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
