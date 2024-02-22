import "./mycontainer.css";
// hooks
import { createContext, useState } from "react";
export const TextProvider: any = createContext("");
// components
import { TextArea, Previewer } from "../../components";
export default function MyContainer() {
  let [text, setText]: any = useState("");

  return (
    <>
      <TextProvider.Provider value={{ text, setText }}>
        <main className="flex flex-col space-y-[1rem] items-center min-h-screen">
          <h1 className="text-[3.5rem] font-bold text-gray-800">
            Marked Previewer
          </h1>
          <article className="grid grid-cols-2 w-full min-h-[30rem] ">
            <TextArea />
            <Previewer />
          </article>
        </main>
      </TextProvider.Provider>
    </>
  );
}
