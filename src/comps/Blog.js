import React, { useEffect, useState } from "react";
import { data } from "../utillities/data";
import { useParams, Link } from "react-router-dom";
import {
  ImTwitter,
  ImFacebook2,
  ImLinkedin,
  ImShare2,
  ImLink,
  ImQuotesLeft,
  ImQuotesRight,
} from "react-icons/im";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const item = data.find((i) => i.id === id);
    setBlog(item);
  }, [setBlog, id]);

  console.log(blog);

  function getData(content) {
    switch (content.type) {
      case "paragraph":
        return (
          <p className="text-sm md:text-lg tracking-wider text-gray-500 font-main">
            {content.data.text}
          </p>
        );
      case "header":
        return (
          <h3 className=" text-[16px] md:text-[22px] text-gray-600 capitalize ">
            {content.data.text}
          </h3>
        );
      case "quote":
        return (
          <div className="w-full h-auto py-8 px-5 text-left border-l-[5px] border-slate-100">
            <h2 className=" text-[14px] md:text-[20px] text-gray-500">
              <span>" {content.data.text} "</span>
            </h2>
            <p className="text-sm italic text-indigo-500 font-[800] mt-5">
              written
              {content.data.caption}
            </p>
          </div>
        );
      case "raw":
        return (
          <div className="w-full h-auto py-7 px-5 bg-slate-100 rounded-[3px] text-xs text-gray-600  ">
            {content.data.html}
          </div>
        );
      case "image":
        return (
          <img
            src={content.data.url}
            alt={content.data.id}
            className="object-cover rounded-[4px] drop-shadow-md"
          />
        );
      case "list":
        return (
          <ul className="ml-5 list-disc">
            {content.data.items.map((item, index) => (
              <li key={index} className="text-xs md:text-sm text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        break;
    }
  }

  return (
    <div className="main-container">
      {blog !== null ? (
        <div className="flex flex-col gap-5 justify-start items-start">
          <div className="flex justify-between w-full gap-6 items-center flex-wrap">
            <div className="flex justify-start items-start gap-3">
              <div className="w-[70px] h-[70px] drop-shadow-sm">
                <img
                  src={blog.profile}
                  alt="profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="self-start text-gray-700 text-[16px] capitalize mt-2 font-[700]">
                  {blog.writtenBy}
                </h4>
                <div className="flex justify-start items-start gap-3">
                  <h5 className="text-xs text-gray-400">{blog.postedOn}</h5>
                  <h5 className="text-xs text-indigo-500">
                    {blog.follower} followers
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex justify-start ml-1  sm:ml-0 items-start gap-4">
              <Link to="/" className="text-gray-400">
                <ImTwitter />
              </Link>
              <Link to="/" className="text-gray-400">
                <ImFacebook2 />
              </Link>
              <Link to="/" className="text-gray-400">
                <ImLinkedin />
              </Link>
              <Link to="/" className="text-gray-400">
                <ImLink />
              </Link>
              <Link to="/" className="text-gray-400 ml-3">
                <ImShare2 />
              </Link>
            </div>
          </div>
          <div className="self-start">
            <h1 className="text-xl md:text-4xl text-gray-700 capitalize font-[900] mt-5">
              {blog.title}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-3 mt-3">
            {blog.content.blocks.map((bl, index) => (
              <div key={index} className="w-full h-auto">
                {getData(bl)}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Blog;
