import Image from "next/image";
import React from "react";
import { MdArrowBack } from "react-icons/md";

interface HeaderProps {
  onClose: () => void;
  toggleCategoryModal: () => void;
  isModalOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onClose,
  toggleCategoryModal,
  isModalOpen,
}) => {
  return (
    <div className="flex items-center gap-2 bg-secondary-50 p-6 bg-blue-600">
      <div className="flex items-center gap-2">
        {!isModalOpen && (
          <button className="mr-2" onClick={toggleCategoryModal}>
            <MdArrowBack className="w-5 h-5 text-white cursor-pointer" />
          </button>
        )}

        <div className=" rounded-full w-10 h-10">
          <Image
            src={"/svg/bot-image1.svg"}
            width={50}
            height={50}
            alt="bot image"
            className="size-[2.5rem]"
          />
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold text-white">
            Electricity Commission Bot
          </h4>

          <p className="flex items-center gap-1 text-white text-xs">
            <span className="inline-block bg-green-400 rounded-full size-2" />
            Active
          </p>
        </div>
      </div>

      <div className="flex ml-auto">
        <button
          onClick={onClose}
          className="flex justify-center items-center p-2 border border-blue-50 rounded-full aspect-square cursor-pointer shrink-0 grow-0"
        >
          <span className="inline-block bg-blue-50 rounded-sm w-2 h-px" />
        </button>
      </div>
    </div>
  );
};

export default Header;
