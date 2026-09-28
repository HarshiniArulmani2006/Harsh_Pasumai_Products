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

import { useState } from "react";
import { sendContactMessage } from "./services/api";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });
    setIsSending(true);

    try {
      await sendContactMessage(form);
      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", text: "Your message was sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.response?.data?.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handleChange} style={inputStyle} required />

          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} style={inputStyle} required />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "none" }}
            required
          />

          <button type="submit" style={buttonStyle} disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status.text && <p style={statusStyle(status.type)}>{status.text}</p>}
        </form>
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

const statusStyle = (type) => ({
  marginTop: "15px",
  textAlign: "center",
  color: type === "success" ? "#087f23" : "#b42318",
});

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

