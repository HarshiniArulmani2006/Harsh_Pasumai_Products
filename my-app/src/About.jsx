// function About() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>About Us</h1>
//       <p>We sell 100% natural, chemical-free organic products from farmers.</p>
//       <p>All Products from our manufacturing made by traditional Natural Farming Methods</p>
//       <h1>All our Products make your life longer and Healthy</h1>
//     </div>
//   );
// }

// export default About;
import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Harsh’s Pasumai Hub 🌿</h1>

        <p>
          Welcome to <b>Harsh’s Pasumai Hub</b> — your trusted destination for 
          pure natural products. Our mission is to bring the goodness of nature 
          to your home through healthy, eco-friendly products grown responsibly.
        </p>

        <h3>✨ What We Believe</h3>
        <ul>
          <li>100% Natural & Organic Ingredients</li>
          <li>Eco-friendly production methods</li>
          <li>Pure, chemical-free quality</li>
          <li>Supporting local farmers</li>
        </ul>

        <h3>🌱 Our Promise</h3>
        <p>
          Every product is crafted with care and love.  
          We ensure freshness, authenticity, and premium quality.
        </p>

        <h3>📞 Contact & Support</h3>
        <p>Email: harshpasumaihub@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </div>
  );
}

export default About;
