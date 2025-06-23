"use client";
import { useTabScroller } from "../hooks/useTabScroller";
import AboutBreadcrumb from "./AboutBreadcrumb";
import AboutMobileView from "./AboutMobileView";
import { useAboutSidebar } from "./AboutSideTab";

const AboutPage = () => {
  const sections = useAboutSidebar();

  const { contentRef, selectedSectionIndex, handleCategoryClick } =
    useTabScroller(sections);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6">
        <AboutBreadcrumb
          sectionName={sections[selectedSectionIndex]?.key || ""}
        />
      </div>

      <AboutMobileView />

      {/* Desktop Sidebar and Content */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 mb-[2rem]">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:block bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
          <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
            {sections[selectedSectionIndex]?.name}
          </h2>
          <nav className="flex flex-col space-y-2">
            {sections?.map((section, idx) => (
              <button
                key={section?.key}
                onClick={() => handleCategoryClick(idx)}
                className={`py-3 px-4 text-left rounded-md transition-colors ${
                  selectedSectionIndex === idx
                    ? "bg-blue-300 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {section?.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main ref={contentRef} className="md:col-span-3 scroll-mt-[100px]">
          {sections[selectedSectionIndex]?.content}
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
