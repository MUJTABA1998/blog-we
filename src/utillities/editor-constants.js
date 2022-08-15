import Table from "@editorjs/table";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Paragraph from "@editorjs/paragraph";
// import { StyleInlineTool } from "editorjs-style";
import SimpleImage from "./simple-image";

export const EDITOR_JS_TOOLS = {
  list: List,
  table: Table,
  marker: Marker,
  delimiter: Delimiter,
  linkTool: LinkTool,
  check: CheckList,
  raw: Raw,
  header: Header,
  quote: Quote,
  inlineCode: InlineCode,
  paragraph: Paragraph,
  // style: StyleInlineTool,
  image: SimpleImage,
};
