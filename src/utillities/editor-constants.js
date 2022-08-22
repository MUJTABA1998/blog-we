import List from "@editorjs/list";

import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import SimpleImage from "./simple-image";
import Link from "../tools/Link";
import Code from "../tools/Code";

export const EDITOR_JS_TOOLS = {
  list: List,
  Link: Link,
  code: Code,
  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4],
      defaultLevel: 3,
    },
  },
  quote: Quote,
  paragraph: Paragraph,
  image: SimpleImage,
};
