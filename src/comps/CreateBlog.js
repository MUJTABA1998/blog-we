import React, { useRef, useState } from "react";
import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS } from "../utillities/editor-constants";
import { useGlobalContext } from "../AppContext";
import { v4 as uid } from "uuid";


let editordata = null;

export const CreateBlog = () => {
  const { blogs, setBlogs } = useGlobalContext();
  const editorRef = useRef();

  const [title, setTitle] = useState("");

  const save = async () => {
    try {
      const content = await editordata.save();
      if (content) {
        console.log("Content.....\n", content);
        return content;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editordata === null || title === "") {
      alert("All Fields required");
      return;
    }
    let cont = await save();
    if (cont) {
      console.log("running........");
      const newBlog = {
        id: uid(),
        writtenBy: "robert roy britt",
        postedOn: "12 May, 2022",
        follower: 234,
        profile:
          "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
        title,
        content: cont,
      };
      setBlogs([...blogs, newBlog]);
      setTitle("");
      editordata.clear();
    } else {
      console.log("not runngin ...........");
    }
  };

  return (
    <div className="main-container">
      <div className="flex flex-col items-start justify-center w-full h-auto py-10 gap-7">
        <h1 className="text-5xl font-extrabold tracking-wider text-gray-800 capitalize font-main">
          Start writing your blog
        </h1>
        <div className="">
          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={handleChange}
            className="w-[650px] h-[70px] text-gray-500 border-2 border-gray-200 rounded-[7px] px-5  outline-none text-[18px] placeholder:text-[16px] placeholder:text-gray-500 font-main placeholder:capitalize "
          />
        </div>
        <div className="" ref={editorRef}>
          <EditorJs
            placeholder="Start Write Your Blog"
            tools={EDITOR_JS_TOOLS}
            editorInstance={(instance) => {
              editordata = instance;
            }}
            className="w-full pb-10 pl-6"
          />
        </div>
        <div className="flex items-start justify-start w-full gap-6">
          <button
            className="px-5 py-2 bg-gray-800 tracking-wider text-white font-main rounded-[5px]"
            onClick={handleSubmit}
          >
            Submit Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
