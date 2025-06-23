"use client";
import { useRef, useState } from "react";
import { IChatMessage } from "../interfaces/dto/message.type";
import { endpoints } from "@/api/endpoints";
import { useGetDataQuery } from "@/api/api";
import { useSelector } from "react-redux";

export interface IMessage extends IChatMessage {
  status?: "sending" | "sent" | "failed" | "typing";
  sender: "user" | "bot" | "systemUser";
}

export const useChat = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [isSending, setIsMessageSending] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const subCategoryId = useSelector(
    (state: { chatSlice: { subCategoryId: string } }) =>
      state.chatSlice.subCategoryId
  );

  const { data: chatAnswerData } = useGetDataQuery({
    url: endpoints.chatbot.chatAnswer + `?sub_category_id=${subCategoryId}`,
  });

  const sendMessage = (message: string) => {
    const newData: IMessage = {
      message,
      sender: "user",
      sender_id: "user",
      type: "chat_message",
      status: "sending",
    };

    setMessages((prev) => {
      return [...prev, newData];
    });
    setIsMessageSending(true);
    setTimeout(() => {
      chatContainerRef.current?.scrollTo(
        0,
        chatContainerRef.current.scrollHeight
      );
    }, 1);
  };

  return {
    messages,
    sendMessage,
    chatContainerRef,
    isSending,
    isModalOpen,
    setIsModalOpen,
    chatAnswerData,
  };
};
