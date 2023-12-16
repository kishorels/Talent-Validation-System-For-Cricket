import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import "./index.css";
import Register from "./Register";
import Login from "./Login";
import reportWebVitals from "./reportWebVitals";
import About from "./About"
import Bat from "./Bat";
import Bowl from "./Bowl";
import Allr from "./Allr";
import Home from "./Home";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/Bat" element={<Bat />} />
      <Route path="/Bowl" element={<Bowl />} />
      <Route path="/Allr" element={<Allr />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
