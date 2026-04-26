import React from "react";

function Contact() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      
      <h1>Contact Me</h1>

      {/* Basic Info */}
      <p>You can reach me through the following:</p>

      <p><b>Email:</b> sasmalankita09@gmail.com</p>
      <p><b>Phone:</b> +91-9332695380</p>

      {/* Contact Form */}
      <h2 style={{ marginTop: "30px" }}>Send Message</h2>

      <form style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <textarea
          placeholder="Your Message"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

    </div>
  );
}

export default Contact;