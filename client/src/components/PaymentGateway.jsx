import React, { useState } from "react";

export default function PaymentGateway() {
  const [amount, setAmount] = useState(100);

  const createOrder = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    alert("Order created. Order ID: " + data.id);
  };

  return (
    <div>
      <h4>💳 Pay Online</h4>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={createOrder}>Pay with Razorpay</button>
    </div>
  );
}
