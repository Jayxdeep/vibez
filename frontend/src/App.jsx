import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import ChapterDetails from "./pages/ChapterDetails";
import ShlokaDetails from "./pages/ShlokaDetails";

function App() {
  return (
    <Routes>
      {/* 🕉️ Intro (Home) */}
      <Route path="/" element={<Intro />} />

      {/* 🔐 Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="/chapter/:id" element={<ChapterDetails />} />
      <Route path="/chapter/:chapterId/shlokas/:verseId" element={<ShlokaDetails />} />






    </Routes>
  );
}

export default App;
