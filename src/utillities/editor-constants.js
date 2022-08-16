import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";

import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Paragraph from "@editorjs/paragraph";
// import { StyleInlineTool } from "editorjs-style";
import SimpleImage from "./simple-image";
import MarkerTool from "./marker";

export const EDITOR_JS_TOOLS = {
  list: List,
  marker: MarkerTool,
  delimiter: Delimiter,
  linkTool: LinkTool,
  check: CheckList,
  raw: Raw,
  inlineCode: {
    class: InlineCode,
  },
  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4],
      defaultLevel: 3,
    },
  },
  quote: Quote,
  paragraph: Paragraph,
  // style: StyleInlineTool,
  image: SimpleImage,
};
