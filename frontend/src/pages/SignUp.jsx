import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.jpg"; // ✅ Using same background as Intro
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${login})`,
      }}
    >
      {/* ✨ Soft golden overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/30 to-black/60"></div>

      {/* 🌿 Signup Form Container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full mx-6 border border-[#c2995a]/40">
        {/* Title */}
        <h1
          className="sanskrit-text text-3xl md:text-4xl font-semibold text-white mb-3"
          style={{
            textShadow:
              "0 0 25px rgba(194,153,90,0.8), 0 0 40px rgba(194,153,90,0.4)",
          }}
        >
          दिव्यश्लोक
        </h1>
        <h2
          className="english-text text-xl font-semibold mb-6"
          style={{
            color: "var(--color-gold)",
          }}
        >
          Join The Divine Verse
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Name Input */}
          <motion.input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-white/85 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-gold)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-white/85 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-gold)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Password Input */}
          <motion.input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-white/85 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-gold)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Signup Button */}
          <motion.button
            type="submit"
            className="mt-2 px-8 py-3 rounded-lg font-[Outfit] text-lg font-medium bg-(--color-gold) text-white shadow-[0_4px_20px_rgba(194,153,90,0.4)] hover:shadow-[0_6px_30px_rgba(194,153,90,0.6)] hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          className="flex items-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grow h-px bg-white/30"></div>
          <div className="grow h-px bg-white/30"></div>
        </motion.div>

        {/* Bottom Links */}
        <motion.p
          className="mt-6 text-gray-300 text-sm font-[Outfit]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-(--color-gold) hover:underline font-medium"
          >
            Login
          </Link>
        </motion.p>
      </div>

      {/* 🌕 Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#c89d5c33] to-transparent blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default Signup;
