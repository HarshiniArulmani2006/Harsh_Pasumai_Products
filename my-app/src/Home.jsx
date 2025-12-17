// function Home(){
//     return(
//         <div>
//             <h1 className="home">Welcome to Harsh's Pasumai Ulagam E-Commerce Website</h1>
//             <h1>Many Products Available with Affordable Cost!!</h1>
//         </div>
//     )
// }
// export default Home
// import React from "react";
// import "./App.css";

// import banner from "./assets/farm-banner.jpg";
// import rice from "./assets/rice.jpg";
// import millets from "./assets/millets.jpg";
// import honey from "./assets/honey.jpg";

// function Home() {
//   return (
//     <div>

//       {/* Banner */}
//       <div
//         className="home-banner"
//         style={{ backgroundImage: `url(${banner})` }}
//       ></div>

//       <h2 className="section-title">Welcome to Harsh's Pasumai Natural Products 🌿</h2>

//       <p style={{ textAlign: "center", maxWidth: "650px", margin: "auto", fontSize: "18px" }}>
//         100% Organic • Naturally Grown • Direct from Farmers to You
//       </p>

//       <h2 className="section-title">Featured Products</h2>

//       <div className="product-container">

//         <div className="product-card">
//           <img src={rice} alt="Organic Rice" />
//           <h3>Organic Rice</h3>
//           <p>Hand-pounded rice grown using natural farming.</p>
//           <p className="price">₹120 / kg</p>
//         </div>

//         <div className="product-card">
//           <img src={millets} alt="Millets" />
//           <h3>Millets</h3>
//           <p>High-fiber millets for a healthy lifestyle.</p>
//           <p className="price">₹90 / kg</p>
//         </div>

//         <div className="product-card">
//           <img src={honey} alt="Honey" />
//           <h3>Pure Honey</h3>
//           <p>Forest honey collected naturally.</p>
//           <p className="price">₹250 / bottle</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Home;
// import products from "./productsData";
// import { Link } from "react-router-dom";
// import "./App.css";

// function Home() {
//   // Pick first 4 products as featured
//   const featured = products.slice(0, 4);

//   return (
//     <div>

//       {/* Banner Section */}
//       <div className="banner">
//         <h1 className="banner-text">Welcome to Harsh's Pasumai Hub</h1>
//       </div>
//          {/* QUOTE SECTION */}
// <p
//   style={{
//     textAlign: "center",
//     fontSize: "22px",
//     fontStyle: "italic",
//     color: "#2e5135",
//     marginTop: "30px",
//     marginBottom: "10px",
//     padding: "0 20px",
//     lineHeight: "1.6",
//   }}
// >
//   “Bringing Nature’s Purity to Your Home.”  
// </p>

// <p
//   style={{
//     textAlign: "center",
//     fontSize: "18px",
//     color: "#3a3a3a",
//     marginBottom: "40px",
//   }}
// >
//   “From Farm to Home!! Freshness You Can Trust!!”
// </p>

//       {/* Featured Products Heading */}
//       <h2 className="section-title">Featured Products</h2>

//       {/* Featured Products */}
//       <div className="featured-container">
//         {featured.map((p) => (
//           <div className="featured-card" key={p.id}>
//             <img src={p.image} alt={p.name} />
//             <h3>{p.name}</h3>
//             <p>₹ {p.price}</p>

//             <Link to={`/productdetails/${p.id}`}>
//               <button className="btn-cart">View</button>
//             </Link>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Home;



// import { useEffect, useState } from "react";
// import { productAPI } from "./services/api";
// import { Link } from "react-router-dom";
// import "./App.css";

// function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     productAPI
//       .getAllProducts()
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Pick first 4 products as featured
//   const featured = products.slice(0, 4);

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="banner">
//         <h1 className="banner-text">Welcome to Harsh's Pasumai Hub</h1>
//       </div>

//       {/* Quote Section */}
//       <p
//         style={{
//           textAlign: "center",
//           fontSize: "22px",
//           fontStyle: "italic",
//           color: "#2e5135",
//           marginTop: "30px",
//           marginBottom: "10px",
//           padding: "0 20px",
//           lineHeight: "1.6",
//         }}
//       >
//         “Bringing Nature’s Purity to Your Home.”
//       </p>

//       <p
//         style={{
//           textAlign: "center",
//           fontSize: "18px",
//           color: "#3a3a3a",
//           marginBottom: "40px",
//         }}
//       >
//         “From Farm to Home!! Freshness You Can Trust!!”
//       </p>

//       {/* Featured Products Heading */}
//       <h2 className="section-title">Featured Products</h2>

//       {/* Featured Products */}
//       <div className="featured-container">
//         {featured.map((p) => (
//           <div className="featured-card" key={p._id}>
//             <img src={p.image} alt={p.name} />
//             <h3>{p.name}</h3>
//             <p>₹ {p.price}</p>

//             <Link to={`/productdetails/${p._id}`}>
//               <button className="btn-cart">View</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import { productAPI } from "./services/api";
import { Link } from "react-router-dom";
import banner from "./assets/farm-banner.jpg";
import "./App.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productAPI
      .getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const featured = products.slice(0, 4);

  return (
    <div className="home-container">
      
      {/* 🔹 BANNER */}
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>Welcome to Harsh's Pasumai Hub</h1>
      </div>

      {/* 🔹 QUOTES */}
      <p className="quote-main">
        “Bringing Nature’s Purity to Your Home.”
      </p>

      <p className="quote-sub">
        “From Farm to Home!! Freshness You Can Trust!!”
      </p>

      {/* 🔹 FEATURED TITLE */}
      <h2 className="featured-title">Featured Products</h2>

      {/* 🔹 FEATURED PRODUCTS */}
      <div className="featured-products">
        {featured.map((p) => (
          <div className="product-card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <Link to={`/productdetails/${p._id}`} className="view-btn">
              View
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
