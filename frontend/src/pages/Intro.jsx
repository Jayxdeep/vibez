import React from "react";
import { Link } from "react-router-dom";
import introBg from "../assets/intro.jpg"; // ✅ ensure correct file type (.jpg/.png)
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${introBg})`,
      }}
    >
      {/* ✨ Soft golden gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70"></div>

      {/* 🌿 Content */}
      <div className="relative z-10 max-w-4xl px-6 py-10 text-white space-y-10">
        {/* Sanskrit Heading */}
        <motion.h1
          className="sanskrit-text text-5xl md:text-6xl font-semibold leading-snug tracking-wide"
          initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            color: "#f9f6f0",
            textShadow:
              "0 0 25px rgba(194,153,90,0.9), 0 0 40px rgba(194,153,90,0.4), 0 0 60px rgba(194,153,90,0.2)",
          }}
        >
          दिव्यश्लोक मध्ये स्वागतम् ।
        </motion.h1>

        {/* English Heading */}
        <motion.h2
          className="english-text text-lg md:text-2xl italic max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          style={{
            color: "#f5f5f5",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          Welcome to{" "}
          <span
            style={{
              color: "var(--color-gold)",
              fontWeight: "700",
              fontFamily: "var(--font-ui)",
            }}
          >
            DivineVerse
          </span>{" "}
          — your intelligent companion through eternal wisdom.
        </motion.h2>

        {/* 🌺 Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        >
          <Link to="/login">
            <button className="px-8 py-3 rounded-lg font-[Outfit] text-lg font-medium bg-(--color-gold) text-white shadow-[0_4px_20px_rgba(194,153,90,0.4)] hover:shadow-[0_6px_30px_rgba(194,153,90,0.6)] hover:-translate-y-1 transition-all duration-300">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-8 py-3 rounded-lg font-[Outfit] text-lg font-medium bg-white/90 text-(--color-gold) hover:bg-white shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:-translate-y-1 transition-all duration-300">
              Sign Up
            </button>
          </Link>

          <Link to="/about">
            <button className="px-8 py-3 rounded-lg font-[Outfit] text-lg font-medium border-2 border-(--color-gold) text-(--color-gold) hover:bg-(--color-gold) hover:text-white hover:shadow-[0_4px_20px_rgba(194,153,90,0.6)] hover:-translate-y-1 transition-all duration-300">
              Know More
            </button>
          </Link>
        </motion.div>

        {/* ✨ Subtext */}
        <motion.p
          className="english-text text-sm md:text-base max-w-xl mx-auto mt-8 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{
            fontFamily: "var(--font-ui)",
            color: "#e0e0e0",
          }}
        >
          “Where ancient wisdom meets modern intelligence — discover the light
          within every verse.”
        </motion.p>
      </div>

      {/* 🌕 Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#c89d5c33] to-transparent blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default Intro;
