"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const RAZORPAY_SECRET = "eggito@330";
router.post("/", (req, res) => {
    const signature = req.headers["x-razorpay-signature"];
    const body = req.body;
    const expectedSignature = crypto_1.default
        .createHmac("sha256", RAZORPAY_SECRET)
        .update(body)
        .digest("hex");
    if (expectedSignature === signature) {
        console.log("✅ Webhook Verified");
        const payload = JSON.parse(body.toString());
        // Simulate alert via local file
        const alertMessage = `ALERT: Payment Webhook Received\nTime: ${new Date().toISOString()}\nEvent: ${payload.event}\n\n`;
        fs_1.default.appendFileSync(path_1.default.join(__dirname, "../alerts.log"), alertMessage);
        res.status(200).json({ status: "Webhook received successfully" });
    }
    else {
        console.log("❌ Invalid webhook signature");
        res.status(400).json({ error: "Invalid signature" });
    }
});
exports.default = router;
