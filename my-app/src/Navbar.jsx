// import {Link} from "react-router-dom";
// function Navbar(){
//     return(
//         <nav>
//             <Link to="/home">Home</Link> {"  "}{" "}
//             <Link to="/products">Products</Link>{"  "}{" "}
//             <Link to="/cart">Cart</Link> {"  "}{" "}
//             <Link to="/contact">Contact</Link>{"  "}{" "}
//         </nav>
//     )
// }
// export default Navbar

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav style={{
//       padding: "15px",
//       background: "green",
//       color: "white",
//       display: "flex",
//       justifyContent: "space-between"
//     }}>
//       <h2>HARISH'S PASUMAI PRODUCTS</h2>

//       <div style={{ display: "flex", gap: "20px" }}>
//         <Link to="/" style={{ color: "white" }}>Home</Link>
//         <Link to="/products" style={{ color: "white" }}>Products</Link>
//         <Link to="/about" style={{ color: "white" }}>About</Link>
//         <Link to="/cart" style={{ color: "white" }}>Cart</Link>
//         <Link to="/contact" style={{ color: "white" }}>Contact</Link>
//         <Link to="/login" style={{ color: "white" }}>Login</Link>
//         <Link to="/signup" style={{ color: "white" }}>Signup</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>HARISH'S PASUMAI PRODUCTS</h2>

//       <div>
//         <Link to="/home">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// //import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">HARISH'S PASUMAI PRODUCTS</h2>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="logo">HARISH'S PASUMAI PRODUCTS</div>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/products">Products</Link>
//         <Link to="/about">About</Link>
//         <Link to="/cart">Cart</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem("token")));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("pendingBuyNow");
    localStorage.removeItem("checkoutItems");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">HARSH'S PASUMAI PRODUCTS 🌱🛒</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <button type="button" className="nav-action" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


