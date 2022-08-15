import { Route, Routes } from "react-router-dom";
import AllBlogs from "./comps/AllBlogs";
import Navbar from "./comps/Navbar";
import CreateBlog from "./comps/CreateBlog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
