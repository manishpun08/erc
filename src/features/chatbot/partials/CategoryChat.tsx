"use client";

import { useChatCategories } from "../hooks/useCategory.hook";
import { IChatCategoryResult } from "../interfaces/chatCategory.interface";
import { ServiceCard } from "./ServiceCard";

export default function CategoryChat({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { activeTab, setActiveTab, chatCategoryData, filteredSubCategories } =
    useChatCategories();

  return (
    <div className="shadow-[0px_-3px_16.3px_3px rgba(0,0,0,0.04)]  rounded-t-[1.25rem]">
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1 mb-4 text-center rounded-[1.625rem] bg-blue-50">
        {chatCategoryData?.results.map((tab: IChatCategoryResult) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`text-[0.857rem] font-medium leading-[150%] rounded-[1.625rem] text-[#555] transition-colors py-[0.75rem] px-[1rem] ${
              activeTab === tab?.id ? "bg-blue-500 text-white " : ""
            }`}
          >
            {tab?.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <ServiceCard
        subCategoryData={filteredSubCategories}
        closeModal={closeModal}
      />
    </div>
  );
}
