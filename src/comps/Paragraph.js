import React from "react";

const Paragraph = ({ content }) => {
  return <p>{content.replace("<br>", "")}</p>;
};

export default Paragraph;
