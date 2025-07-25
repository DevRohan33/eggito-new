import express from "express";
import crypto from "crypto";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET || "")
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      console.log("✅ Payment verified successfully");
      return res.status(200).json({ success: true, message: "Payment verified" });
    } else {
      console.log("❌ Payment verification failed");
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (err) {
    console.error("❌ Error in payment verification", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
