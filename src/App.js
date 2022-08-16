import { Route, Routes } from "react-router-dom";
import AllBlogs from "./comps/AllBlogs";
import Navbar from "./comps/Navbar";
import CreateBlog from "./comps/CreateBlog";
import Blog from "./comps/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
