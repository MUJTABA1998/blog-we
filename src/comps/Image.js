import React from "react";

const Image = ({ content }) => {
  return (
    <div className="max-w-7xl h-[500px] flex items-start justify-start">
      <img
        src={content.data.url}
        alt={content.data.id}
        className="object-contain w-full h-full rounded-[4px]"
      />
    </div>
  );
};

export default Image;
