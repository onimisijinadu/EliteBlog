import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/blogdetail";
import CreateBlog from "./components/createblog";
import EditBlog from "./components/edditBlog";
import useFetch from "./usefetch";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
