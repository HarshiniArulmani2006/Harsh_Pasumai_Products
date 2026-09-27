import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./services/api";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const { data } = await signup(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      const pendingBuyNow = localStorage.getItem("pendingBuyNow");
      if (pendingBuyNow) {
        localStorage.setItem("checkoutItems", JSON.stringify([{ ...JSON.parse(pendingBuyNow), qty: 1 }]));
        localStorage.removeItem("pendingBuyNow");
        navigate("/checkout");
      } else {
        navigate("/products");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e8ffe8"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        width: "350px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ textAlign: "center", color: "green" }}>Signup</h2>

        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          style={inputStyle}
        /><br />

        <input type="email" placeholder="Email" value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          style={inputStyle}
        /><br />

        <input type="password" placeholder="Password" value={form.password}
          onChange={(event) => setForm({ ...form, password: event.target.value })}
          style={inputStyle}
        /><br />

        <button type="submit" style={buttonStyle}>Signup</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Signup;
