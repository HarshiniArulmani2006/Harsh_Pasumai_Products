// function Contact(){
//     return(
//      <div>
//        <p> Address: </p>
//         <p> Street Name: </p>
//          <p> District and State: </p>
//          <p>Pincode:</p>
//      </div>
//     )
// }
// export default Contact

// function Contact() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Contact</h1>
//       <p><b>Email:</b> harsh@pasumai.com</p>
//       <p><b>Alternate Email:</b>pasumaiproductsatpasumai@gmail.com</p>
//       <p><b>Mobile number:</b>9876543255</p>
//       <p><b>Alternate Mobile number:</b>9688754195</p>
//     </div>
//   );
// }

// export default Contact;

function Contact() {
  return (
    <div style={{
      padding: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0fff0",
      minHeight: "90vh"
    }}>
      <div style={{
        width: "500px",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ textAlign: "center", color: "green", marginBottom: "20px" }}>
          Contact Us
        </h2>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" style={inputStyle} />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" style={inputStyle} />

        <label>Message</label>
        <textarea
          placeholder="Write your message..."
          rows="5"
          style={{ ...inputStyle, resize: "none" }}
        />

        <button style={buttonStyle}>Send Message</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0 20px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Contact;

