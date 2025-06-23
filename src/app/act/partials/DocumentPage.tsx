"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useDocumentPage } from "../hooks/useDocumentPage";
import ActMobileView from "./ActMobileView";
import CategorySidebar from "./CategorySidebar";
import DocumentList from "./DocumentList";

interface Props {
  slug1: string;
}

const DocumentPage: React.FC<Props> = ({ slug1 }) => {
  const {
    selectedCategory,
    currentPage,
    pageCount,
    categoriesList,
    subcategory,
    allDocuments,
    annualReport,
    setCurrentPage,
    handleCategoryClick,
    isLoading,
  } = useDocumentPage(slug1);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {subcategory?.main_category || "Documents"}
      </h1>

      <ActMobileView slug1={slug1} />

      <div className="flex gap-5 lg:gap-10">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-1/4">
          <CategorySidebar
            categories={categoriesList}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        {/* Content */}
        <div className="w-full">
          <DocumentList
            annualReport={annualReport ?? false}
            documents={allDocuments}
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
