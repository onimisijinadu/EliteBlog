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
import Notfound from "./components/Notfound";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/EliteBlog/" element={<Home />} />
        <Route path="/EliteBlog/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
