"use client";
import { IActRelatedSubcategory } from "@/Interface/document.interface";

interface CategorySidebarProps {
  categories: IActRelatedSubcategory[];
  selectedCategory: string;
  onCategoryClick: (category: IActRelatedSubcategory) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <aside className="bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
      <h2 className="typography-p-regular text-text-500 font-semibold mb-[1.25rem]">
        {selectedCategory}
      </h2>

      <nav className="flex flex-col space-y-2 ">
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category)}
            className={`py-3 px-4 text-left rounded-md transition-colors typography-p-small ${
              selectedCategory === category?.name
                ? "bg-blue-300 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            {category?.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default CategorySidebar;
