import React, { lazy, Suspense } from "react";
import { Audio } from "react-loader-spinner";
// import Home from "./components/home";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BlogDetails from "./components/blogdetail";
// import CreateBlog from "./components/createblog";
// import EditBlog from "./components/edditBlog";
// import useFetch from "./usefetch";
import Footer from "./components/footer";
//import Notfound from "./components/Notfound";
function App() {
  const Home = lazy(() => import("./components/home"));
  const BlogDetails = lazy(() => import("./components/blogdetail"));
  const CreateBlog = lazy(() => import("./components/createblog"));
  const EditBlog = lazy(() => import("./components/edditBlog"));
  const Notfound = lazy(() => import("./components/Notfound"));
  return (
    <div className="App">
      <BrowserRouter basename="/EliteBlog">
        <Suspense
          fallback={
            <div className="loader">
              <Audio
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogs/:id/edit" element={<EditBlog />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
