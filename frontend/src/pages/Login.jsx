import React from "react";
import { Link } from "react-router-dom";
import loginBg from "../assets/login.jpg"; // ✅ ensure correct file type (.jpg/.png)
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* ✨ Soft golden overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/35 to-black/65"></div>

      {/* 🌿 Login Form Container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full mx-6 border border-[#c2995a]/40">
        {/* Title */}
        <h1
          className="sanskrit-text text-3xl md:text-4xl font-semibold text-white mb-3"
          style={{
            textShadow:
              "0 0 20px rgba(194,153,90,0.6), 0 0 40px rgba(194,153,90,0.3)",
          }}
        >
          दिव्यश्लोक
        </h1>
        <h2 className="english-text text-xl font-semibold text-(--color-gold) mb-6"
         style={{
            color: "#f9f6f0",
            textShadow:
              "0 0 25px rgba(194,153,90,0.9), 0 0 40px rgba(194,153,90,0.4), 0 0 60px rgba(194,153,90,0.2)",
          }}>
          Welcome Back to DivineVerse
          
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Email Input */}
          <motion.input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-gold)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Password Input */}
          <motion.input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-var(--color-gold)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Login Button */}
          <motion.button
            type="submit"
            className="mt-2 px-8 py-3 rounded-lg font-[Outfit] text-lg font-medium bg-(--color-gold) text-white shadow-[0_4px_20px_rgba(194,153,90,0.4)] hover:shadow-[0_6px_30px_rgba(194,153,90,0.6)] hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          className="flex items-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grow h-px bg-white/30"></div>
          <span className="px-3 text-sm text-gray-300 font-[Outfit]">
            or continue with
          </span>
          <div className="grow h-px bg-white/30"></div>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          
        </motion.div>

        {/* Bottom Links */}
        <motion.p
          className="mt-6 text-gray-300 text-sm font-[Outfit]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-(--color-gold) hover:underline font-medium"
          >
            Sign Up
          </Link>
        </motion.p>
      </div>

      {/* 🌕 Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#be945533] to-transparent blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default Login;
