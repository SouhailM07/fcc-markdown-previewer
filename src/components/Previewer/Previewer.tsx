import "./previewer.css";
// hooks
import { TextProvider } from "../MyContainer/MyContainer";
import { useContext } from "react";
//
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Previewer() {
  let { text }: any = useContext(TextProvider);
  const html = marked.parse(text);
  const sanitizedHtml = DOMPurify.sanitize(html);
  return (
    <>
      <div>
        <h1 className="text-center">Previewer</h1>
        <section dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></section>;
      </div>
    </>
  );
}
