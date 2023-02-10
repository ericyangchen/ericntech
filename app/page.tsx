"use client";

import { motion } from "framer-motion";
import "./HomePage.css";
// import { Oswald } from "@next/font/google";
// const FontOswald = Oswald({
//   weight: "700",
//   subsets: ["latin"],
// });

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-full text-2xl">
      <motion.div initial={{ x: -500 }} animate={{ scale: 1 }}>
        Home Page
        <br />
        Home Page
        <br />
        Home Page
        <br />
        Home Page
        <br />
        Home Page
        <br />
        Home Page
        <br />
        Home Page
        <br />
        <br />
      </motion.div>
    </div>
  );
}
