import express from "express";
import razorpay from "../utils/razorpayClient";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { amount, currency = "INR", receipt } = req.body;

    const options = {
      amount: amount * 100, // Razorpay accepts paise
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log("✅ Razorpay Order Created:", order);

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("❌ Error creating Razorpay order:", error);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
});

export default router;
