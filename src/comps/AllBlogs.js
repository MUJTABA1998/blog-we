import React from "react";
import {Link} from 'react-router-dom'
import { data } from "../utillities/data";

const AllBlogs = () => {
  

  if (data.length === 0) {
    return <h1 className="main-container">No Blog To Show</h1>;
  }
  if (data) {
    return (
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-start gap-14 py-10">
          {data.map((blog, index) => (
            <Link
              className="flex flex-col-reverse md:flex-row justify-between items-start gap-3"
              key={index}
              to={`/blogs/${blog.id}`}
            >
              <div className="flex flex-col items-start justify-start gap-y-2">
                <div className="flex justify-start items-center gap-5">
                  <img
                    src={blog.profile}
                    alt={blog.id}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <h3 className="text-[14px] text-gray-700 font-[600] font-primary capitalize tracking-wider">
                    {blog.writtenBy}
                  </h3>
                </div>
                <h1 className="text-[20px] mt-3  text-gray-800 capitalize font-primary font-[900]">
                  {blog.title}
                </h1>
                <div className="flex justify-center items-center gap-5">
                  <h5 className="text-gray-400 text-xs">{blog.postedOn}</h5>
                  <h5 className="text-xs  text-indigo-400">
                    {blog.follower} followers
                  </h5>
                </div>
              </div>
              <div className="self-center">
                {blog.content.blocks.map((bl, index) => {
                  if (bl.type === "image") {
                    return (
                      <img
                        src={bl.data.url}
                        alt={index}
                        key={index}
                        className="w-[300px] rounded-[3px] drop-shadow-sm"
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default AllBlogs;

