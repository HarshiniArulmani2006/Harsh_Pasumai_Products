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

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>HARISH'S PASUMAI PRODUCTS</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;


