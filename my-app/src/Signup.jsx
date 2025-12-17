import { Link } from "react-router-dom";

function Signup() {
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

        <input type="text" placeholder="Full Name"
          style={inputStyle}
        /><br />

        <input type="text" placeholder="Email"
          style={inputStyle}
        /><br />

        <input type="password" placeholder="Password"
          style={inputStyle}
        /><br />

        <button style={buttonStyle}>Signup</button>

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
