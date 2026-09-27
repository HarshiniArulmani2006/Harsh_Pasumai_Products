// import { useState, useEffect } from "react";

// function Checkout() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const item = JSON.parse(localStorage.getItem("buyNow"));
//     setProduct(item);
//   }, []);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     pincode: "",
//     method: "Cash on Delivery",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const placeOrder = () => {
//     if (!form.name || !form.phone || !form.address || !form.pincode) {
//       alert("Please fill all details");
//       return;
//     }
//     alert("Order Placed Successfully!");
//   };

//   if (!product) return <h2 style={{ padding: "20px" }}>No Product Found!</h2>;

//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         background: "#f3ffe6",
//         padding: "40px",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "600px",
//           background: "white",
//           padding: "30px",
//           borderRadius: "12px",
//           boxShadow: "0 0 12px rgba(0,0,0,0.2)",
//         }}
//       >
//         <h1 style={{ textAlign: "center", color: "green", marginBottom: "20px" }}>
//           Checkout
//         </h1>

//         {/* Delivery Details */}
//         <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>Delivery Details</h2>

//         <label>Full Name</label>
//         <input
//           name="name"
//           type="text"
//           placeholder="Enter your name"
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "8px 0 15px 0",
//             borderRadius: "6px",
//             border: "1px solid #999",
//           }}
//         />

//         <label>Phone Number</label>
//         <input
//           name="phone"
//           type="text"
//           placeholder="10-digit number"
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "8px 0 15px 0",
//             borderRadius: "6px",
//             border: "1px solid #999",
//           }}
//         />

//         <label>Full Address</label>
//         <textarea
//           name="address"
//           placeholder="House no, Street, Area"
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "10px",
//             height: "70px",
//             margin: "8px 0 15px 0",
//             borderRadius: "6px",
//             border: "1px solid #999",
//           }}
//         ></textarea>

//         <label>Pincode</label>
//         <input
//           name="pincode"
//           type="text"
//           placeholder="Enter pincode"
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "8px 0 15px 0",
//             borderRadius: "6px",
//             border: "1px solid #999",
//           }}
//         />

//         <label>Payment Method</label>
//         <select
//           name="method"
//           onChange={handleChange}
//           style={{
//             width: "100%",
//             padding: "10px",
//             margin: "8px 0 15px 0",
//             borderRadius: "6px",
//             border: "1px solid #999",
//           }}
//         >
//           <option>Cash on Delivery</option>
//           <option>UPI</option>
//           <option>Card Payment</option>
//         </select>

//         {/* Order Summary */}
//         <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>Order Summary</h2>

//         <div
//           style={{
//             padding: "10px 0",
//             fontSize: "18px",
//             borderBottom: "1px solid #ddd",
//           }}
//         >
//           {product.name} — ₹{product.price}
//         </div>

//         <h2 style={{ marginTop: "20px" }}>
//           Total:{" "}
//           <span style={{ color: "green", fontWeight: "bold" }}>
//             ₹{product.price}
//           </span>
//         </h2>

//         <button
//           onClick={placeOrder}
//           style={{
//             marginTop: "25px",
//             width: "100%",
//             padding: "14px",
//             background: "green",
//             color: "white",
//             border: "none",
//             borderRadius: "8px",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "./services/api";
import "./Cart.css";

function Checkout() {
  const navigate = useNavigate();
  const [cart] = useState(() => (
    JSON.parse(localStorage.getItem("checkoutItems"))
      || JSON.parse(localStorage.getItem("cart"))
      || []
  ));
  const [form, setForm] = useState({ deliveryAddress: "", phone: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, [navigate]);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty || item.quantity || 1),
    0
  );

  const placeOrder = async () => {
    if (!cart.length) return setError("Your cart is empty");
    if (!form.deliveryAddress || !form.phone) {
      return setError("Enter your delivery address and phone number");
    }
    try {
      const isBuyNow = Boolean(localStorage.getItem("checkoutItems"));
      await createOrder({
        products: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          qty: item.qty || item.quantity || 1,
        })),
        totalAmount: total,
        deliveryAddress: form.deliveryAddress,
        phone: form.phone,
      });
      if (!isBuyNow) localStorage.removeItem("cart");
      localStorage.removeItem("checkoutItems");
      setMessage("Order placed successfully");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to place order");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Secure Checkout</h2>
      <p className="checkout-subtitle">Review your order and add delivery details.</p>
      <div className="checkout-summary">
        {cart.map((item) => (
          <div className="checkout-item" key={item._id}>
            <span>{item.name} x {item.qty || item.quantity || 1}</span>
            <strong>₹{Number(item.price) * Number(item.qty || item.quantity || 1)}</strong>
          </div>
        ))}
      </div>
      {message ? <h3>{message}</h3> : (
        <div className="checkout-form">
          <p className="checkout-total">Total: ₹{total}</p>
          <input
            className="checkout-input"
            placeholder="Delivery address"
            value={form.deliveryAddress}
            onChange={(event) => setForm({ ...form, deliveryAddress: event.target.value })}
          />
          <input
            className="checkout-input"
            placeholder="Phone number"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
    
  );
}

export default Checkout;
