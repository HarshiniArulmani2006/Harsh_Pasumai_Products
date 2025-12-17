import { useState, useEffect } from "react";

function Checkout() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("buyNow"));
    setProduct(item);
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    method: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("Please fill all details");
      return;
    }
    alert("Order Placed Successfully!");
  };

  if (!product) return <h2 style={{ padding: "20px" }}>No Product Found!</h2>;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f3ffe6",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "green", marginBottom: "20px" }}>
          Checkout
        </h1>

        {/* Delivery Details */}
        <h2 style={{ marginTop: "20px", marginBottom: "10px" }}>Delivery Details</h2>

        <label>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        />

        <label>Phone Number</label>
        <input
          name="phone"
          type="text"
          placeholder="10-digit number"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        />

        <label>Full Address</label>
        <textarea
          name="address"
          placeholder="House no, Street, Area"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            height: "70px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        ></textarea>

        <label>Pincode</label>
        <input
          name="pincode"
          type="text"
          placeholder="Enter pincode"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        />

        <label>Payment Method</label>
        <select
          name="method"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 15px 0",
            borderRadius: "6px",
            border: "1px solid #999",
          }}
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Card Payment</option>
        </select>

        {/* Order Summary */}
        <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>Order Summary</h2>

        <div
          style={{
            padding: "10px 0",
            fontSize: "18px",
            borderBottom: "1px solid #ddd",
          }}
        >
          {product.name} — ₹{product.price}
        </div>

        <h2 style={{ marginTop: "20px" }}>
          Total:{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            ₹{product.price}
          </span>
        </h2>

        <button
          onClick={placeOrder}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "14px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
