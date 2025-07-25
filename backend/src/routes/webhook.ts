import express from "express";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const router = express.Router();
const RAZORPAY_SECRET = "eggito@330";

router.post("/", (req: any, res) => {
  const signature = req.headers["x-razorpay-signature"];
  const rawBody = req.body;

  const expectedSignature = crypto
    .createHmac("sha256", RAZORPAY_SECRET)
    .update(rawBody)
    .digest("hex");

  if (expectedSignature === signature) {
    console.log("✅ Webhook Verified");

    const payload = JSON.parse(rawBody.toString());

    const alertMessage = `ALERT: Payment Webhook Received
Time: ${new Date().toISOString()}
Event: ${payload.event}
Payload: ${JSON.stringify(payload.payload, null, 2)}

`;

    fs.appendFileSync(path.join(__dirname, "../alerts.log"), alertMessage);

    res.status(200).json({ status: "Webhook received successfully" });
  } else {
    console.log("❌ Invalid webhook signature");
    res.status(400).json({ error: "Invalid signature" });
  }
});

export default router;
