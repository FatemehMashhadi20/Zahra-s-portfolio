"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Anime", image: "/IMG_5039.jpg" },
  { id: 2, title: "Abstract Flow", image: "/IMG_5040.jpeg" },
  { id: 3, title: "Ocean Dreams", image: "/IMG_5041.jpeg" },
  { id: 4, title: "Ocean Dreams", image: "/IMG_5042.jpeg" },
  { id: 5, title: "Ocean Dreams", image: "/IMG_5045.jpeg" },
  { id: 6, title: "Ocean Dreams", image: "/IMG_5047.jpeg" },
  { id: 7, title: "Ocean Dreams", image: "/IMG_5052.jpeg" },
  { id: 8, title: "Ocean Dreams", image: "/IMG_5058.jpeg" },
  { id: 9, title: "Ocean Dreams", image: "/IMG_5087.jpeg" },
  { id: 10, title: "Ocean Dreams", image: "/IMG_5088.jpeg" },
  { id: 11, title: "Ocean Dreams", image: "/IMG_5090.jpeg" },
  { id: 12, title: "Ocean Dreams", image: "/IMG_5092.jpeg" },
  { id: 13, title: "Ocean Dreams", image: "/IMG_5093.jpeg" },
  { id: 14, title: "Ocean Dreams", image: "/IMG_5102.jpeg" },
  { id: 15, title: "Ocean Dreams", image: "/IMG_5107.jpeg" },
  { id: 16, title: "Ocean Dreams", image: "/IMG_5112.jpeg" },
  { id: 17, title: "Ocean Dreams", image: "/FullSizeRender.jpeg" },
];

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // To track submission status

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgolvol", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Message sent! We'll get back to you soon.");
    }
  };

  return (
    
    
    <div className="container mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Zahra's Portfolio Page
      </motion.h1>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <div key={art.id} className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{art.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className="px-6 py-3 text-white bg-pink-600 hover:bg-pink-700 rounded-lg text-lg"
          onClick={() => window.open("https://www.instagram.com/zaradi.art/?igsh=MW1qY3A2a3RmMmY1OQ%3D%3D", "_blank")}
        >
          Follow Me on Instagram
        </button>
      </div>

      {/* Contact Form */}
      <div className="mt-16 p-8 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Get in Touch</h2>

        {status && <p className="text-center mb-4 text-green-600">{status}</p>} {/* Show status */}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button type="submit" className="bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
            Send Message
          </button>
        </form>

        

      </div>

      <footer className="mt-16 p-4 text-center text-gray-600">
  <p>&copy; {new Date().getFullYear()} Zahra's Portfolio. All rights reserved.</p>
</footer>
    </div>
  );
}
