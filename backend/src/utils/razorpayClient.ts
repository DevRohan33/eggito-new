import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",         // Replace with your actual Razorpay Key ID
  key_secret: "YOUR_KEY_SECRET", // Replace with your actual Razorpay Key Secret
});

export default razorpay;
