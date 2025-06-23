// hooks/useChatCategories.ts
import { useEffect, useState } from "react";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ISubCategoryChatResult } from "../interfaces/subCategory,interface";

export function useChatCategories() {
  const [activeTab, setActiveTab] = useState("");

  const { data: chatCategoryData } = useGetDataQuery({
    url: endpoints.chatbot.chatCategory,
  });

  const { data: subCategoryData } = useGetDataQuery({
    url: endpoints.chatbot.subCategory,
  });

  // Set first tab as active once categories load
  useEffect(() => {
    if (chatCategoryData?.results?.length && !activeTab) {
      setActiveTab(chatCategoryData.results[0].id);
    }
  }, [chatCategoryData, activeTab]);

  // Filter subcategories based on active category
  const filteredSubCategories: ISubCategoryChatResult[] =
    subCategoryData?.results?.filter(
      (sub: ISubCategoryChatResult) => sub.category === activeTab
    ) || [];

  return {
    activeTab,
    setActiveTab,
    chatCategoryData,
    filteredSubCategories,
  };
}
