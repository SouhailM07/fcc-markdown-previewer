import "./textarea.css";
// hooks
import { TextProvider } from "../MyContainer/MyContainer";
import { useContext } from "react";

export default function TextArea() {
  let { text, setText }: any = useContext(TextProvider);

  return (
    <>
      <section className=" h-full ">
        <h1 className="text-center">input</h1>
        <textarea
          className=" min-h-full w-full border-2 border-black text-[16px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </section>
    </>
  );
}
