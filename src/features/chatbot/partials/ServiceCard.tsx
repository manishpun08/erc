import { setSubCategoryId } from "@/store/slices/chatSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { ISubCategoryChatResult } from "../interfaces/subCategory,interface";

interface ServiceCardProps {
  closeModal: () => void;
  subCategoryData: ISubCategoryChatResult[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  subCategoryData,
  closeModal,
}) => {
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    closeModal();
    dispatch(setSubCategoryId(id));
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-[0.64rem]">
      {subCategoryData?.map((item) => (
        <button
          key={item?.id}
          onClick={() => handleClick(item?.id)}
          className="flex flex-col items-center border border-blue-100 bg-white rounded-[0.22363rem] text-center py-[0.92rem] px-[1.17rem] hover:bg-blue-50 transition-colors"
        >
          <div className="flex items-center justify-center mb-[0.34rem] h-12 w-12 text-blue-400">
            <div className="w-20 h-10 mb-2">
              <Image
                src={item?.icon}
                alt="icon"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-blue-400 font-noto-sans text-[0.68694rem] leading-[120%] font-semibold text-wrap">
            {item?.name}
          </div>
        </button>
      ))}
    </div>
  );
};
