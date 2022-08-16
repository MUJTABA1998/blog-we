import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Paragraph from "@editorjs/paragraph";
import SimpleImage from "./simple-image";


export const EDITOR_JS_TOOLS = {
  list: List,
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
  image: SimpleImage,
};
