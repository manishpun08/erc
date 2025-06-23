import React from "react";
import { IChatMessage } from "../interfaces/dto/message.type";
import Message from "./Message";

interface IMessagesContainerProps {
  chatAnswerData: IChatMessage[];
}

const MessagesContainer: React.FC<IMessagesContainerProps> = ({
  chatAnswerData,
}) => {
  return (
    <div className="space-y-5 mb-4 px-1.5 pt-4 w-full h-max overflow-y-hidden">
      {chatAnswerData?.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};
export default MessagesContainer;
