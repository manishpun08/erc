import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import {
  IActRelatedSubcategory,
  IActRecord as IActDocumentRecord,
  IActSubcategory,
} from "@/Interface/document.interface";

const PER_PAGE = 4;

interface UseDocumentPageReturn {
  slug: string;
  selectedCategory: string;
  currentPage: number;
  pageCount: number;
  categoriesList: IActRelatedSubcategory[];
  subcategory: IActSubcategory | undefined;
  allDocuments: IActDocumentRecord[];
  annualReport: boolean | undefined;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  handleCategoryClick: (category: IActRelatedSubcategory) => void;
  tabScrollRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollTabs: (direction: "left" | "right") => void;
  isLoading: boolean;
}

export function useDocumentPage(initialSlug: string): UseDocumentPageReturn {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [slug, setSlug] = useState(initialSlug);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Scroll state & ref for mobile tabs
  const tabScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { data: categoryDocumentData, isLoading } = useGetDataQuery({
    url: `${endpoints.categoryDetail}/${slug}/`,
  });
  const { data: documentData } = useGetDataQuery({
    url: `${endpoints.document}`,
    params: {
      sub_category__sub_ctg_slug: slug,
      p: currentPage,
      page_size: 10,
    },
  });
  const categoriesList =
    categoryDocumentData?.data?.subcategory?.related_subcategories ?? [];
  const subcategory = categoryDocumentData?.data?.subcategory;
  const allDocuments = documentData?.records ?? [];
  const pageCount = Math.ceil(allDocuments.length / PER_PAGE);
  const annualReport = subcategory?.is_annual_report;

  useEffect(() => {
    if (subcategory) {
      setSelectedCategory(subcategory.name);
    }
  }, [subcategory]);

  useEffect(() => {
    const paramSlug = searchParams.get("slug");
    if (paramSlug && paramSlug !== slug) {
      setSlug(paramSlug);
    }
  }, [searchParams, slug]);

  // Scroll button update logic
  const updateScrollButtons = () => {
    const container = tabScrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = tabScrollRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    const container = tabScrollRef.current;
    if (container) {
      const scrollAmount = 150;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const handleCategoryClick = (category: IActRelatedSubcategory) => {
    setSlug(category.sub_ctg_slug);
    setSelectedCategory(category.name);
    setCurrentPage(1);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("slug", category.sub_ctg_slug);
    router.push(`?${newSearchParams.toString()}`);
  };

  return {
    slug,
    selectedCategory,
    currentPage,
    pageCount,
    categoriesList,
    subcategory,
    allDocuments,
    annualReport,
    setCurrentPage,
    handleCategoryClick,
    tabScrollRef,
    canScrollLeft,
    canScrollRight,
    scrollTabs,
    isLoading,
  };
}
