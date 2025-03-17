'use client';

import React from "react";

function About() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-900 via-cyan-500 to-white min-h-screen flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">About Our Platform</h1>
      <div className="max-w-4xl bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
        <p className="mb-4 text-lg">
          Our platform is designed to empower you with complete creative freedom to design your own clothing. Whether you’re an aspiring designer or simply looking to express your personal style, our intuitive interface allows you to choose your favorite colors, logos, fabrics, sizes, and designs—ensuring a fully personalized fashion experience.
        </p>
        <p className="mb-4 text-lg">
          Enhance your creativity with AI-powered design assistance, pre-made templates, and an interactive chatbot for instant suggestions. You can even virtually try on your custom creations using our innovative 3D canvas, ensuring that every design looks impeccable before it reaches you.
        </p>
        <p className="mb-4 text-lg">
          Collaboration is at the heart of our platform. Work together with friends, professional fashion designers, or business partners to co-create and refine designs. Plus, our integrated marketplace makes it easy to sell your designs or discover unique pieces from other creators.
        </p>
        <p className="text-lg">
          Our platform goes beyond customization by offering personalized fashion tips, outfit recommendations based on occasions, and even wardrobe scanning to suggest matching or complementary items. Seamlessly integrated with major e-commerce platforms, we ensure that whether for personal style or business innovation, fashion is creative, collaborative, and accessible.
        </p>
      </div>
    </div>
  );
}

export default About;
