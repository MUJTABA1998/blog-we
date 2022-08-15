import React from "react";
import { useGlobalContext } from "../AppContext";

const AllBlogs = () => {
  const { blogs } = useGlobalContext();
  console.log(blogs);

  function getData(content) {
    switch (content.type) {
      case "paragraph":
        return (
          <p className="text-lg tracking-wider text-gray-500 font-main">
            {content.data.text}
          </p>
        );
      case "header":
        return (
          <h3 className="text-[22px] text-gray-800 uppercase font-main">
            {content.data.text}
          </h3>
        );
      case "image":
        return (
          <img
            src={content.data.url}
            alt={content.data.id}
            className="object-cover rounded-[7px]"
          />
        );
      case "list":
        return (
          <ol start="1" className="ml-5">
            {content.data.items.map((item, index) => (
              <li key={index} className="text-xs text-gray-500 font-main">
                {index + 1 + ":"} {item}
              </li>
            ))}
          </ol>
        );
      default:
        break;
    }
  }

  if (blogs.length === 0) {
    return <h1 className="main-container">No Blog To Show</h1>;
  }
  if (blogs) {
    return (
      <div className="main-container">
        <div className="flex flex-col items-start w-full gap-10 jus-ftify-start ">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-5 blog-content">
              <h1>{blog.title}</h1>
              <div className="flex flex-col gap-3 blog-content-sub">
                {blog.content.blocks.map((b, index) => (
                  <div key={index}>{getData(b)}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default AllBlogs;
