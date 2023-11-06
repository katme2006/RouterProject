import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./components/TopNav";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <TopNav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Additional routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
