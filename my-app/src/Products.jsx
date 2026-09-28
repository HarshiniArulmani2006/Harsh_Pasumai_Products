// function Products(){
//     return(
//      <div>
//        <p> Products are made by Natural Farming!!</p>
//      </div>
//     )
// }
// export default Products

// import React from "react";
// import "./App.css";

// import oil from "./assets/coconut-oil.jpg";
// import turmeric from "./assets/turmeric.jpg";
// import jaggery from "./assets/jaggery.jpg";

// function Products() {
//   return (
//     <div>

//       <h2 className="section-title">Our Organic Products</h2>

//       <div className="product-container">

//         <div className="product-card">
//           <img src={oil} alt="Coconut Oil" />
//           <h3>Cold Pressed Coconut Oil</h3>
//           <p>Wood-pressed, chemical-free pure coconut oil.</p>
//           <p className="price">₹180 / 500ml</p>
//         </div>

//         <div className="product-card">
//           <img src={turmeric} alt="Turmeric" />
//           <h3>Organic Turmeric</h3>
//           <p>High-curcumin, naturally grown turmeric.</p>
//           <p className="price">₹70 / 100g</p>
//         </div>

//         <div className="product-card">
//           <img src={jaggery} alt="Jaggery" />
//           <h3>Natural Jaggery</h3>
//           <p>Made from pure sugarcane without sulphur.</p>
//           <p className="price">₹150 / kg</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Products;

// import { Link } from "react-router-dom";
// import { products } from "./productsData";

// function Products() {
//   return (
//     <div>
//       <h2 style={{ textAlign: "center", marginTop: "20px" }}>Our Natural Products</h2>

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           padding: "20px"
//         }}
//       >
//         {products.map(product => (
//           <Link key={product._id} to={`/product/${product._id}`}>
//             <div
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "15px",
//                 borderRadius: "10px",
//                 width: "230px",
//                 textAlign: "center",
//                 background: "#f5faef",
//                 boxShadow: "0 0 5px rgba(0,0,0,0.1)"
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 style={{
//                   width: "200px",
//                   height: "160px",
//                   borderRadius: "8px"
//                 }}
//               />
//               <h3>{product.name}</h3>
//               <p><b>₹{product.price}</b></p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;

// import React from "react";
// import "./App.css";

// import oil from "./assets/coconut-oil.jpg";
// import turmeric from "./assets/turmeric.jpg";
// import jaggery from "./assets/jaggery.jpg";

// function Products() {
//   return (
//     <div>

//       <h2 className="section-title">Our Organic Products</h2>

//       <div className="product-container">

//         <div className="product-card">
//           <img src={oil} alt="Coconut Oil" />
//           <h3>Cold Pressed Coconut Oil</h3>
//           <p>Wood-pressed, chemical-free pure coconut oil.</p>
//           <p className="price">₹180 / 500ml</p>
//         </div>

//         <div className="product-card">
//           <img src={turmeric} alt="Turmeric" />
//           <h3>Organic Turmeric</h3>
//           <p>High-curcumin, naturally grown turmeric.</p>
//           <p className="price">₹70 / 100g</p>
//         </div>

//         <div className="product-card">
//           <img src={jaggery} alt="Jaggery" />
//           <h3>Natural Jaggery</h3>
//           <p>Made from pure sugarcane without sulphur.</p>
//           <p className="price">₹150 / kg</p>
//         </div>

//          <div className="product-card">
//           <img src={greens} alt="Greens" />
//           <h3>Natural Greens</h3>
//           <p>Many types of Greens available which grown Naturally.</p>
//           <p className="price">₹100 / kg</p>
//         </div>



//       </div>
//     </div>
//   );
// }

// export default Products;

//import products from "./productsData";
// import { Link } from "react-router-dom";

// function Products() {
//   return (
//     <div className="products-container">
//       {products.map((p) => (
//         <div className="product-card" key={p.id}>
//           <img src={p.image} alt={p.name} />
//           <h3>{p.name}</h3>
//           <p>₹ {p.price}</p>

//           <Link to={`/productdetails/${p.id}`}>
//             <button className="btn-cart">View Details</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import products from "../products"; // Make sure products.js is correct

// function Products() {
//   const [search, setSearch] = useState("");

//   // Filter products by search word
//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ marginBottom: "10px" }}>Our Products</h2>

//       {/* SEARCH BAR */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "300px",
//           margin: "20px 0",
//           borderRadius: "8px",
//           border: "1px solid gray",
//         }}
//       />

//       {/* PRODUCT GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ddd",
//               padding: "10px",
//               borderRadius: "10px",
//               textAlign: "center",
//               backgroundColor: "#fff",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 width: "100%",
//                 height: "150px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />

//             <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//             <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

//             <Link to={`/products/${product.id}`}>
//               <button
//                 style={{
//                   padding: "8px 12px",
//                   background: "green",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   marginTop: "10px",
//                 }}
//               >
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import products from "./productsData"; 

// function Products() {
//   const [search, setSearch] = useState("");

//   // Filter products
//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ marginBottom: "10px" }}>Our Products</h2>

//       {/* SEARCH BAR */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "300px",
//           margin: "20px 0",
//           borderRadius: "8px",
//           border: "1px solid gray",
//           fontSize: "16px",
//         }}
//       />

//       {/* PRODUCT GRID */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ddd",
//               padding: "12px",
//               borderRadius: "10px",
//               textAlign: "center",
//               backgroundColor: "#fff",
//               maxWidth: "260px",
//               margin: "auto",
//               transition: "0.3s",
//             }}
//             className="product-card"
//           >
//             {/* IMAGE */}
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 width: "100%",
//                 height: "160px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//                 marginBottom: "10px",
//               }}
//             />

//             <h3 style={{ margin: "10px 0", fontSize: "18px" }}>
//               {product.name}
//             </h3>

//             <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
//               ₹{product.price}
//             </p>

//             {/* CORRECT ROUTE */}
//             <Link to={`/productdetails/${product.id}`}>
//               <button
//                 style={{
//                   padding: "9px 13px",
//                   background: "green",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                   width: "100%",
//                   fontSize: "15px",
//                 }}
//               >
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
// import { useEffect, useState } from "react";
// import { productAPI } from "./services/api";
// import { Link } from "react-router-dom";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     productAPI.getAllProducts()
//       .then(data => {
//         setProducts(data); // 👈 DIRECT DATA
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//       gap: "20px",
//       padding: "30px"
//     }}>
//       {products.map(p => (
//         <div key={p._id} style={{
//           border: "1px solid #ddd",
//           padding: "15px",
//           borderRadius: "10px",
//           background: "#fff"
//         }}>
//           <img
//             src={p.image}
//             alt={p.name}
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "8px"
//             }}
//           />
//           <h3>{p.name}</h3>
//           <p>₹{p.price}</p>
//           <Link to={`/productdetails/${p._id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;

// import { useEffect, useState } from "react";
// import { productAPI } from "./services/api";
// import { Link } from "react-router-dom";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     productAPI.getAllProducts()
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Pasumai Products 🌱</h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map(p => (
//           <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
//             <img src={p.image} alt={p.name} width="180" height="120" />
//             <h4>{p.name}</h4>
//             <p>₹{p.price}</p>
//             <Link to={`/productdetails/${p._id}`}>View</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;



// import { useEffect, useState } from "react";
// import { productAPI } from "./services/api";
// import { Link } from "react-router-dom";
// import "./App.css";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     productAPI
//       .getAllProducts()
//       .then((data) => {
//         console.log("Products from API:", data); // 👈 DEBUG
//         setProducts(data); // ✅ NOT data.data
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   if (products.length === 0) {
//     return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
//   }

//   return (
//     <div className="products-container">
//       {products.map((p) => (
//         <div key={p._id} className="product-card">
//           <img src={p.image} alt={p.name} />
//           <h3>{p.name}</h3>
//           <p>₹ {p.price}</p>

//           <Link to={`/productdetails/${p._id}`}>
//             <button className="btn-cart">View</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;

// import { useEffect, useState } from "react";
// import { productAPI } from "./services/api";
// import { Link } from "react-router-dom";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     productAPI.getAllProducts().then((data) => {
//       console.log("API DATA:", data); // 👈 must print array
//       setProducts(data);
//     });
//   }, []);

//   return (
//     <div className="products-container">
//       {products.map((p) => (
//         <div key={p._id} className="product-card">
//           <img src={p.image} alt={p.name} />
//           <h3>{p.name}</h3>
//           <p>₹ {p.price}</p>
//           <Link to={`/productdetails/${p._id}`}>View</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="products-page">
//       <h2 className="featured-title">Featured Products</h2>

//       <div className="featured-products">
//         {products.map((p) => (
//           <div className="product-card" key={p._id}>

//             {/* 🔥 IMAGE FIX */}
//             <div className="product-image">
//               <img src={p.image} alt={p.name} />
//             </div>

//             <h3>{p.name}</h3>
//             <p className="price">₹ {p.price}</p>

//             <button className="btn-buy">Buy Now</button>
//             <button className="btn-cart">Add to Cart</button>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProducts } from "./services/api";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="featured-products">
//       {products.map(product => (
//         <div className="product-card" key={product._id}>
//           <div className="product-image">
//             <img src={product.image} alt={product.name} />
//           </div>

//           <h3>{product.name}</h3>
//           <p className="price">₹ {product.price}</p>

//           <Link to={`/productdetails/${product._id}`} className="view-link">
//             View Details
//           </Link>

//           <button className="btn-buy">Buy Now</button>
//           <button className="btn-cart">Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart as saveCartItem, getProducts } from "./services/api";
import localProducts from "./productsData";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(localProducts);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(Array.isArray(res.data) && res.data.length > 0
          ? res.data
          : localProducts);
      })
      .catch((err) => {
        console.error("Unable to load products from the API:", err);
        setProducts(localProducts);
      });
  }, []);

  const addToCart = async (product) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(item => item._id === product._id);

    if (exists) {
      cart = cart.map(item =>
        item._id === product._id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    await saveCartItem(product._id);
    alert("Added to cart");
  };

  const buyNow = (product) => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("pendingBuyNow", JSON.stringify(product));
      navigate("/login");
      return;
    }
    localStorage.setItem("checkoutItems", JSON.stringify([{ ...product, qty: 1 }]));
    navigate("/checkout");
  };

  return (
    <div className="products-page">
      <h2 className="featured-title">Our Products</h2>
      <div className="featured-products">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img src={product.image_url || product.image} alt={product.name} />

          <h3>{product.name}</h3>
          <p>₹ {product.price}</p>

          <button className="btn-buy" onClick={() => buyNow(product)}>
            Buy Now
          </button>

          <button className="btn-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <Link
            to={`/productdetails/${product._id}`}
            className="view-link"
          >
            View Details
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Products;


