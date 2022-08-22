import React from "react";

const Heading = ({ content, level }) => {
  if (level === 1) return <h1>{content}</h1>;
  if (level === 2) return <h2>{content}</h2>;
  if (level === 3) return <h3>{content}</h3>;
  if (level === 4) return <h4>{content}</h4>;
};

export default Heading;
