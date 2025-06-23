"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTabScroller } from "../hooks/useTabScroller";
import { useAboutSidebar } from "./AboutSideTab";

const AboutMobileView = () => {
  const sections = useAboutSidebar();

  const {
    tabScrollRef,
    selectedSectionIndex,
    canScrollLeft,
    canScrollRight,
    scrollTabs,
    handleCategoryClick,
  } = useTabScroller(sections);
  return (
    <div>
      {/* Mobile Horizontal Tabs */}
      <div className="relative block md:hidden mb-6">
        {/* Left Arrow */}
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

        {/* Scrollable Tab List */}
        <div ref={tabScrollRef} className="mx-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max">
            {sections?.map((section, idx) => (
              <button
                key={section.key}
                onClick={() => handleCategoryClick(idx)}
                className={`whitespace-nowrap py-2 px-4 rounded-full border transition-colors ${
                  selectedSectionIndex === idx
                    ? "bg-blue-600 text-white"
                    : "bg-white border-blue-300 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {section?.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
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

export default AboutMobileView;
