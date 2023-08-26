import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Routes>
    <Route path="/" element={ <Navbar /> }>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="project" element={<Project />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
    </Route>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  );
}

export default App;
