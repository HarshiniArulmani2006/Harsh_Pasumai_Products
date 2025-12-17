import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load Cart Items
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Calculate Total Price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Remove Item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // BUY NOW -> send only THIS item to checkout
  const handleBuyNow = (item) => {
    navigate("/checkout", {
      state: { cart: [item], total: item.price },
    });
  };

  // PROCEED TO CHECKOUT -> send full cart
  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cart: cartItems, total: totalPrice },
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "#f8fff5",
          }}
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />

          {/* Product Details */}
          <div style={{ flexGrow: 1 }}>
            <h3>{item.name}</h3>
            <p style={{ fontWeight: "bold" }}>Price: ₹{item.price}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              {/* BUY NOW */}
              <button
                onClick={() => handleBuyNow(item)}
                style={{
                  padding: "8px 14px",
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>

              {/* REMOVE */}
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  padding: "8px 14px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Proceed to Checkout Button */}
      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{
            padding: "12px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Proceed to Checkout (Total: ₹{totalPrice})
        </button>
      )}
    </div>
  );
}

export default Cart;
