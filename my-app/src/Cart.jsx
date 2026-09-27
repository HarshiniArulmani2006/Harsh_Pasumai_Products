// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   // Load Cart Items
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);

//   // Calculate Total Price
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   // Remove Item
//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // BUY NOW -> send only THIS item to checkout
//   const handleBuyNow = (item) => {
//     navigate("/checkout", {
//       state: { cart: [item], total: item.price },
//     });
//   };

//   // PROCEED TO CHECKOUT -> send full cart
//   const handleCheckout = () => {
//     navigate("/checkout", {
//       state: { cart: cartItems, total: totalPrice },
//     });
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Your Cart</h2>

//       {cartItems.length === 0 && <p>Your cart is empty.</p>}

//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "20px",
//             border: "1px solid #ddd",
//             marginBottom: "20px",
//             padding: "15px",
//             borderRadius: "10px",
//             backgroundColor: "#f8fff5",
//           }}
//         >
//           {/* Product Image */}
//           <img
//             src={item.image}
//             alt={item.name}
//             style={{
//               width: "120px",
//               height: "120px",
//               borderRadius: "10px",
//               objectFit: "cover",
//             }}
//           />

//           {/* Product Details */}
//           <div style={{ flexGrow: 1 }}>
//             <h3>{item.name}</h3>
//             <p style={{ fontWeight: "bold" }}>Price: ₹{item.price}</p>

//             <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//               {/* BUY NOW */}
//               <button
//                 onClick={() => handleBuyNow(item)}
//                 style={{
//                   padding: "8px 14px",
//                   background: "green",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Buy Now
//               </button>

//               {/* REMOVE */}
//               <button
//                 onClick={() => removeItem(item.id)}
//                 style={{
//                   padding: "8px 14px",
//                   background: "red",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Proceed to Checkout Button */}
//       {cartItems.length > 0 && (
//         <button
//           onClick={handleCheckout}
//           style={{
//             padding: "12px 20px",
//             background: "green",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           Proceed to Checkout (Total: ₹{totalPrice})
//         </button>
//       )}
//     </div>
//   );
// }

// export default Cart;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   const updateQty = (id, change) => {
//     const updated = cart.map(item =>
//       item.id === id
//         ? { ...item, quantity: Math.max(1, item.quantity + change) }
//         : item
//     );

//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>My Cart</h2>

//       {cart.map(item => (
//         <div key={item.id}>
//           <h4>{item.name}</h4>
//           <button onClick={() => updateQty(item.id, -1)}>-</button>
//           <span> {item.quantity} </span>
//           <button onClick={() => updateQty(item.id, 1)}>+</button>
//         </div>
//       ))}

//       <h3>Total ₹{total}</h3>
//       <button onClick={() => navigate("/checkout")}>
//         Proceed to Checkout
//       </button>
//     </div>
//   );
// }

// export default Cart;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const normalizedCart = storedCart.map((item) => ({
      ...item,
      qty: Number(item.qty || item.quantity || 1),
    }));
    setCart(normalizedCart);
    localStorage.setItem("cart", JSON.stringify(normalizedCart));
  }, []);

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item._id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item._id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter(item => item.qty > 0);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const buyNow = (item) => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("pendingBuyNow", JSON.stringify(item));
      navigate("/login");
      return;
    }
    localStorage.setItem(
      "checkoutItems",
      JSON.stringify([{ ...item, qty: Number(item.qty || item.quantity || 1) }])
    );
    navigate("/checkout");
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div className="cart-card" key={item._id}>
          <img src={item.image_url || item.image} alt={item.name} />

          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>
            </div>

            <div className="cart-actions">
              <button
                className="buy-btn"
                onClick={() => buyNow(item)}
              >
                Buy Now
              </button>

              <button
                className="remove-btn"
                onClick={() => removeItem(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ₹{total}</h3>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
