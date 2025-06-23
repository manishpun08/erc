"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDocumentPage } from "../hooks/useDocumentPage";

interface Props {
  slug1: string;
}

const ActMobileView: React.FC<Props> = ({ slug1 }) => {
  const {
    selectedCategory,
    categoriesList,
    handleCategoryClick,
    tabScrollRef,
    canScrollLeft,
    canScrollRight,
    scrollTabs,
  } = useDocumentPage(slug1);
  return (
    <div>
      {/* Mobile horizontal tabs */}
      <div className="relative block md:hidden mb-6">
        <button
          onClick={() => scrollTabs("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow transition-opacity ${
            !canScrollLeft ? "opacity-40 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div ref={tabScrollRef} className="mx-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max">
            {categoriesList?.map((category) => (
              <button
                key={category?.id}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap py-2 px-4 rounded-full border transition-colors ${
                  selectedCategory === category?.name
                    ? "bg-blue-600 text-white"
                    : "bg-white border-blue-300 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {category?.name}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTabs("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow transition-opacity ${
            !canScrollRight ? "opacity-40 cursor-not-allowed" : "opacity-100"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ActMobileView;
