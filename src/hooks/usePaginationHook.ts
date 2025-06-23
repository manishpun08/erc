import { useRouter } from "next/navigation";
import { useState } from "react";

const usePaginationChange = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  return { currentPage, handlePageChange };
};

export default usePaginationChange;
