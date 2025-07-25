import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import webhookRouter from "./routes/webhook";
import orderRouter from "./routes/order";
import dotenv from "dotenv";
import verifyPayment from "./routes/verifyPayment";


const app = express();
const PORT = 3001;

// For webhook route, use raw body parser
app.use(
  "/webhook",
  bodyParser.raw({ type: "*/*" }) // Raw required by Razorpay webhook signature
);

// 👉 For all other routes, use JSON parser
app.use(bodyParser.json()); // This is required for /create-order

// Enable CORS
app.use(cors());

// 👉 Register routes
app.use("/webhook", webhookRouter);
app.use("/create-order", orderRouter); // ✅ Mount order route
app.use("/verify-payment", verifyPayment); 
// Test route
app.get("/", (_, res) => res.send("Backend is running..."));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
});
