// function Productdetails(){
//     return(
//      <div>
//        <p> Bajra </p>
//         <p> Corn </p>
//          <p> Rice </p>
//          <p>Ragi</p>
//      </div>
//     )
// }
// export default Productdetails

// import { useParams } from "react-router-dom";
// import { products } from "./productsData";

// function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find(p => p._id === id);

//   if (!product) return <h2>Product not found!</h2>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{product.name}</h2>

//       <img
//         src={turmeric.jpg}
//         alt={product.name}
//         style={{ width: "350px", borderRadius: "10px" }}
//       />

//       <p style={{ fontSize: "18px", marginTop: "10px" }}>
//         <b>Price:</b> ₹{product.price}
//       </p>

//       <p style={{ maxWidth: "600px" }}>{product.description}</p>

//       <button
//         style={{
//           padding: "10px 20px",
//           background: "green",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           marginTop: "15px"
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductDetails;
// import { useParams } from "react-router-dom";
// import products from "./productsData";

// function Productdetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id == id);

//   return (
//     <div className="details-box">
//       <img src={product.image} />
//       <h2>{product.name}</h2>
//       <h3>₹ {product.price}</h3>
//       <p style={{ marginTop: "10px" }}>{product.description}</p>

//       <button className="btn-buy">Buy Now</button>
//       <button className="btn-cart">Add to Cart</button>
//     </div>
//   );
// }

// export default Productdetails;
// import { useParams, useNavigate } from "react-router-dom";
// import products from "./productsData";
// import { useEffect, useState } from "react";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   // Load Selected Product
//   useEffect(() => {
//     const selectedProduct = products.find((p) => p.id == id);
//     setProduct(selectedProduct);
//   }, [id]);

//   // Add to Cart
//   const addToCart = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const item = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     };

//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));

//     alert("Added to Cart!");
//   };

//   // BUY NOW (send only one item + total)
//   const buyNow = () => {
//     navigate("/checkout", {
//       state: {
//         cart: [
//           {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//           },
//         ],
//         total: product.price,
//       },
//     });
//   };

//   if (!product) return <h2 style={{ padding: "20px" }}>Product Not Found!</h2>;

//   return (
//     <div style={{ padding: "40px", display: "flex", gap: "40px" }}>
//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         style={{
//           width: "350px",
//           height: "350px",
//           borderRadius: "10px",
//           objectFit: "cover",
//         }}
//       />

//       {/* Product Info */}
//       <div>
//         <h2 style={{ fontSize: "28px", color: "green" }}>{product.name}</h2>
//         <h3 style={{ marginTop: "10px" }}>Price: ₹{product.price}</h3>

//         <p style={{ marginTop: "20px", width: "400px", lineHeight: "1.6" }}>
//           {product.description ||
//             "This is a high-quality natural product from Harsh's Pasumai Hub."}
//         </p>

//         {/* Buttons */}
//         <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
//           <button
//             onClick={buyNow}
//             style={{
//               padding: "12px 20px",
//               background: "green",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             Buy Now
//           </button>

//           <button
//             onClick={addToCart}
//             style={{
//               padding: "12px 20px",
//               background: "orange",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productAPI } from "./services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productAPI.getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <img src={product.image} width="300" />
      <h2>{product.name}</h2>
      <h3>₹ {product.price}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;

