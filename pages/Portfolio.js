import React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Sunset Bliss", image: "/art1.jpg" },
  { id: 2, title: "Abstract Flow", image: "/art2.jpg" },
  { id: 3, title: "Ocean Dreams", image: "/art3.jpg" },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Artist Portfolio
      </motion.h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <Card key={art.id} className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-60 object-cover"
            />
            <CardContent>
              <h2 className="text-lg font-semibold">{art.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="text-white bg-blue-600 hover:bg-blue-700">
          Contact the Artist
        </Button>
      </div>
    </div>
  );
}
