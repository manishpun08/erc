import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  pageCount: number;

  onPageChange: (page: number) => void;
};

const CustomPagination = ({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(pageCount, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-80 mt-4">
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="w-5 h-5" />
          </button>

          {generatePageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3.5 py-2 rounded-[0.25rem] typography-p-small font-medium border-[0.5px] border-blue-300  ${
                currentPage === pageNum
                  ? "bg-user-primary text-white bg-blue-300"
                  : "hover:bg-blue-200 text-blue-400 hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="p-2 rounded-lg hover:bg-user-primary/60 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPagination;
