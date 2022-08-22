import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../AppContext";

import { useParams, Link } from "react-router-dom";
import {
  ImTwitter,
  ImFacebook2,
  ImLinkedin,
  ImShare2,
  ImLink,
} from "react-icons/im";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import List from "./List";
import Code from "./Code";
import LinkTag from "./Link";
import Quote from "./Quote";
import Image from "./Image";

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const { blogs } = useGlobalContext();

  useEffect(() => {
    const item = blogs.find((i) => i.id === id);
    setBlog(item);
  }, [setBlog, id, blogs]);

  console.log(blog);

  function getData(content) {
    switch (content.type) {
      case "paragraph":
        return <Paragraph content={content.data.text} />;
      case "header":
        return (
          <Heading content={content.data.text} level={content.data.level} />
        );
      case "quote":
        return <Quote content={content} />;
      case "code":
        let code = content.data.html.split("\n");
        return (
          <div className="max-w-7xl  h-[200px] pt-7 px-5 bg-gray-800 rounded-[3px] text-xs text-gray-400  ">
            {code.map((c, index) => (
              <Code key={index} content={c} />
            ))}
          </div>
        );
      case "image":
        return <Image content={content} />;
      case "Link":
        return <LinkTag link={content.data.link} />;
      case "list":
        return (
          <ul
            className={`ml-10 ${
              content.data.style === "unordered" ? "list-disc" : "list-decimal"
            }`}
          >
            {content.data.items.map((item, index) => (
              <List item={item} key={index} />
            ))}
          </ul>
        );
      default:
        break;
    }
  }

  return (
    <div className="flex items-center justify-center max-w-5xl px-5 py-10 mx-auto md:px-0">
      {blog !== null ? (
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="flex flex-wrap items-center justify-between w-full gap-6">
            <div className="flex items-start justify-start gap-3">
              <div className="w-[70px] h-[70px] drop-shadow-sm">
                <img
                  src={blog.profile}
                  alt="profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="self-start text-gray-700 text-[16px] capitalize mt-2 font-[700]">
                  {blog.writtenBy}
                </h4>
                <div className="flex items-start justify-start gap-3">
                  <h5 className="text-xs text-gray-400">{blog.postedOn}</h5>
                  <h5 className="text-xs text-indigo-500">
                    {blog.follower} followers
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4 ml-1 sm:ml-0">
              <Link to="/" className="text-gray-700">
                <ImTwitter />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImFacebook2 />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImLinkedin />
              </Link>
              <Link to="/" className="text-gray-700">
                <ImLink />
              </Link>
              <Link to="/" className="ml-3 text-indigo-500">
                <ImShare2 />
              </Link>
            </div>
          </div>
          <div className="self-start">
            <h1 className="text-[25px] md:text-[40px] text-gray-800 capitalize font-[900] mt-5 -mb-3">
              {blog.title}
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 mt-3 mb-5">
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
