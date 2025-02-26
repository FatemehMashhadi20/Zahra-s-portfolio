"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="container mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Welcome to My Portfolio
      </motion.h1>
      
      <p className="text-center text-lg text-gray-600">
        Explore my work and projects.
      </p>
    </div>
  );
}
