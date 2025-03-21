import React from "react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-cyan-500 to-white flex flex-col items-center py-10 px-6 text-white">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-purple-500">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-6">
          We would love to hear from you! Whether you have a question, feedback, or a business inquiry, our team is always ready to assist you. Feel free to reach out to us through any of the channels below.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
        <p className="mb-2">Need help with our platform? Our support team is available 24/7 to assist you.</p>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:support@fashionplatform.com" className="text-cyan-300 hover:underline">support@fashionplatform.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Live Chat: Available on our website</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Business & Partnerships</h2>
        <p className="mb-2">Interested in collaborating with us? Whether you're a fashion designer, manufacturer, or influencer, we'd love to discuss potential opportunities.</p>
        <ul>
          <li>Email: <a href="mailto:business@fashionplatform.com" className="text-cyan-300 hover:underline">business@fashionplatform.com</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Visit Us</h2>
        <p className="mb-2">Our headquarters:</p>
        <p className="mb-6">123 Fashion Street, New York, NY 10001, USA</p>

        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p className="mb-4">Stay connected and updated on the latest trends:</p>
        <ul className="flex space-x-4 justify-center">
          <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Facebook</a></li>
          <li><a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">Instagram</a></li>
          <li><a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a></li>
          <li><a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactPage;
