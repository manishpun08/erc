"use client";

import { useChat } from "../hooks/useChat";
import CategoryChat from "./CategoryChat";
import ChatSuggestion from "./ChatSuggestion";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessagesContainer from "./MessagesContainer";
import {
  IChatAnswerQuestion,
  IChatAnswerSuggestion,
} from "../interfaces/chatAnswer";

function extractSuggestions(
  data: IChatAnswerQuestion[]
): IChatAnswerSuggestion[] {
  return (
    data
      ?.flatMap((item) =>
        item.answers?.flatMap((answer) => answer.suggestions || [])
      )
      .filter((s) => !!s.suggestion) || []
  );
}

const MessageUI: React.FC<{ isOpen: boolean; closePopup: () => void }> = ({
  closePopup,
  isOpen,
}) => {
  const {
    sendMessage,
    chatContainerRef,
    isSending,
    isModalOpen,
    setIsModalOpen,
    chatAnswerData,
  } = useChat();

  const closeModal = () => setIsModalOpen(!isModalOpen);
  const suggestions = extractSuggestions(chatAnswerData);

  return (
    <div
      style={{
        background: "#f1f8fc",
        boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
        opacity: isOpen ? "1" : "0",
        pointerEvents: isOpen ? "all" : "none",
        transform: isOpen ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
      }}
      className="flex flex-col border rounded-[1.25rem] min-w-[25rem] h-[40rem] max-h-[calc(100vh-10rem)] overflow-hidden"
    >
      <Header
        onClose={closePopup}
        isModalOpen={isModalOpen}
        toggleCategoryModal={closeModal}
      />

      <div ref={chatContainerRef} className="flex-1 px-1.5 overflow-y-auto">
        <MessagesContainer chatAnswerData={chatAnswerData} />
      </div>

      <ChatSuggestion
        sendMessage={sendMessage}
        suggestions={suggestions}
        disabled={isSending}
      />

      {isModalOpen && (
        <div className="fixed top-22 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-4 relative h-120">
            <CategoryChat closeModal={closeModal} />
          </div>
        </div>
      )}

      <div className="shrink-0">
        <MessageInput disabled={isSending} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default MessageUI;
