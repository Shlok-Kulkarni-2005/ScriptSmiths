import React from "react";


function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question, feedback, or a business inquiry, our team is always ready to assist you. Feel free to reach out to us through any of the channels below.
      </p>

      <h2>Customer Support</h2>
      <p>
        Need help with our platform? Our support team is available 24/7 to assist you.
      </p>
      <ul>
        <li>Email: <a href="mailto:support@fashionplatform.com">support@fashionplatform.com</a></li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Live Chat: Available on our website</li>
      </ul>

      <h2>Business & Partnerships</h2>
      <p>
        Interested in collaborating with us? Whether you're a fashion designer, manufacturer, or influencer, we'd love to discuss potential opportunities.
      </p>
      <ul>
        <li>Email: <a href="mailto:business@fashionplatform.com">business@fashionplatform.com</a></li>
      </ul>

      <h2>Visit Us</h2>
      <p>Our headquarters:</p>
      <p>
        123 Fashion Street,  
        New York, NY 10001, USA
      </p>

      <h2>Follow Us</h2>
      <p>Stay connected and updated on the latest trends:</p>
      <ul className="social-links">
        <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default ContactPage;
