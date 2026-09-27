// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="card-container">

//       <div className="card">
//         <img src="https://via.placeholder.com/200" alt="card" className="card-img" />
//         <h3>Card 1</h3>
//         <p>This is a simple card using flex.</p>
//         <button className="btn">View</button>
//       </div>

//       <div className="card">
//         <img src="https://via.placeholder.com/200" alt="card" className="card-img" />
//         <h3>Card 2</h3>
//         <p>Practice creating layouts using Flexbox.</p>
//         <button className="btn">View</button>
//       </div>

//       <div className="card">
//         <img src="https://via.placeholder.com/200" alt="card" className="card-img" />
//         <h3>Card 3</h3>
//         <p>Try adding more cards or changing the styles.</p>
//         <button className="btn">View</button>
//       </div>

//     </div>
//   );
// }

// export default App;


// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import Cart from "./Cart";
// import Contact from "./Contact";
// function App(){
//   return(
//     <BrowserRouter>
//     <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//          <Route path="/products" element={<Products />} />
//           <Route path="/productdetails" element={<Productdetails />} />
//            <Route path="/cart" element={<Cart />} />
//            <Route path="/contact" element={<Contact />} /> 
//       </Routes>
    
//     </BrowserRouter>
//   )
// }
// export default App

// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import About from "./About";
// import Cart from "./Cart"
// import Contact from "./Contact";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         {/* Products Page */}
//         <Route path="/products" element={<Products />} />

//         {/* Product Details */}
//         <Route path="/product/:id" element={<Productdetails />} />
        
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import Cart from "./Cart";
// import Contact from "./Contact";
// import About from "./About";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";   // ✔ IMPORTANT: must match file name exactly
// import Cart from "./Cart";
// import Contact from "./Contact";
// import About from "./About";
// import Login from "./Login";
// import Signup from "./Signup";
// import Checkout from "./Checkout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Products Page */}
//         <Route path="/products" element={<Products />} />

//         {/* View Details Page */}
//         <Route path="/productdetails/:id" element={<Productdetails />} />

//         {/* Cart */}
//         <Route path="/cart" element={<Cart />} />

//         {/* Contact Page */}
//         <Route path="/contact" element={<Contact />} />

//         {/* About Page */}
//         <Route path="/about" element={<About />} />

//         {/* Login / Signup */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/checkout" element={<Checkout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import Cart from "./Cart";
// import Login from "./Login";
// import Signup from "./Signup";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import Cart from "./Cart";
// import Checkout from "./Checkout";
// import About from "./About";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Products from "./Products";
// import About from "./About";
// import Cart from "./Cart";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";
// import Navbar from "./Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         {/* HOME PAGE */}
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />

//         {/* OTHER PAGES */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import Home from "./Home";
// import Products from "./Products";
// import ProductDetails from "./Productdetails";
// import About from "./About";
// import Cart from "./Cart";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         {/* HOME */}
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Navigate to="/" />} />

//         {/* OTHER PAGES */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<ProductDetails />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* SAFETY */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import About from "./About";
// import Cart from "./Cart";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Navigate to="/" />} />

//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />

//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Products />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import About from "./About";
// import Cart from "./Cart";
// import Contact from "./Contact";
// import Login from "./Login";
// import Signup from "./Signup";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Navigate to="/" />} />

//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />

//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";

// import Home from "./Home";
// import Products from "./Products";
// import Productdetails from "./Productdetails";
// import Cart from "./Cart";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Signup from "./Signup";
// import About from "./About";
// import Contact from "./Contact";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/productdetails/:id" element={<Productdetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import Products from "./Products";
import Productdetails from "./Productdetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
