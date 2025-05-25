import React from "react";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/blogdetail";
import CreateBlog from "./components/createblog";
import EditBlog from "./components/edditBlog";
import Footer from "./components/footer";
import Notfound from "./components/Notfound";
function App() {
  return (
    <BrowserRouter basename="/EliteBlog">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
