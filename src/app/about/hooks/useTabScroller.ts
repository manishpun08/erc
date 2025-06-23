// useTabScroller.ts
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Section {
  key: string;
  name: string;
  content: React.ReactNode;
}

export function useTabScroller(sections: Section[]) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabScrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const tabKey = searchParams.get("tab");
    const idx = sections.findIndex((section) => section.key === tabKey);
    setSelectedSectionIndex(idx !== -1 ? idx : 0);

    const timer = setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams, sections]);

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

  const handleCategoryClick = (idx: number) => {
    const sectionKey = sections[idx].key;
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", sectionKey);
    router.push(`?${newParams.toString()}`, { scroll: false });
    setSelectedSectionIndex(idx);
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return {
    tabScrollRef,
    contentRef,
    selectedSectionIndex,
    canScrollLeft,
    canScrollRight,
    scrollTabs,
    handleCategoryClick,
  };
}
