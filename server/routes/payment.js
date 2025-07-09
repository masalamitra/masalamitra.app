const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY
});

router.post("/create-order", async (req, res) => {
  const { amount, currency = "INR" } = req.body;
  try {
    const options = { amount: amount * 100, currency, receipt: "receipt#1" };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Payment Failed" });
  }
});

module.exports = router;
