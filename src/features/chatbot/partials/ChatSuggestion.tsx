import { motion } from "motion/react";
import { IChatAnswerSuggestion } from "../interfaces/chatAnswer";

const ChatSuggestion: React.FC<{
  suggestions: IChatAnswerSuggestion[];
  disabled?: boolean;
  sendMessage?: (message: string) => void;
}> = ({ suggestions, disabled, sendMessage }) => {
  if (!suggestions?.length) return null;

  return (
    <div
      className={`flex flex-wrap justify-center gap-1 px-[2.31rem] py-3 w-full sticky bottom-0 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {suggestions.map((suggestion, i) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: i * 0.2,
              bounce: 0.01,
            },
          }}
          disabled={disabled}
          key={suggestion.id}
          onClick={() => sendMessage?.(stripHtml(suggestion.suggestion) || "")}
          style={{
            boxShadow: "0px 0px 10.1px 0px rgba(202, 50, 145, 0.39)",
          }}
          className="bg-white hover:bg-blue-50 px-[0.88rem] py-[0.62rem] border border-blue-500 rounded-full font-medium text-blue-500 hover:text-blue-600 capitalize transition-colors cursor-pointer disabled:pointer-events-none typography-p-small"
          dangerouslySetInnerHTML={{ __html: suggestion.suggestion }}
        />
      ))}
    </div>
  );
};

const stripHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

export default ChatSuggestion;
