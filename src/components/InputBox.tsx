import { useRef, useEffect, useState } from "react";
import { Send } from "../icons/Send";

export const InputBox = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // reset height before measuring
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; // adjust to content
    }
  }, [value]);

  return (
    <div className="min-h-28 w-full sm:w-[80%] rounded-2xl overflow-hidden flex-col items-end p-2 border border-gray-400">
      <textarea
        ref={textareaRef}
        name="promptBox"
        id="Prompt"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your message..."
        rows={2}
        className="w-full resize-none overflow-hidden outline-none"
      />

      <div className="flex items-center justify-between w-full mt-2">
        <div className="h-8 w-25 bg-gray-800 rounded-full"></div>
        <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
          <Send />
        </div>
      </div>
    </div>
  );
};
