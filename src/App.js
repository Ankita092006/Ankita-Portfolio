import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";  // ✅ fixed (removed extra text)
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;