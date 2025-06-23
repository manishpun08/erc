"use client";
import React, { useRef, useState } from "react";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { X } from "lucide-react";
import DisplayPdf from "../DisplayPdf";
import { IActDetailData } from "@/app/act/[slug1]/[slug]/interface/actDetail.interface";
// import { useClickOutside } from "@/hooks/useClickoutside";

interface PdfModalProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

const PdfModal = ({ isOpen, onClose }: PdfModalProps) => {
  const { data } = useGetDataQuery({
    url: endpoints.popup,
  });

  // Filter files where is_active is true
  const files: IActDetailData[] =
    data?.data?.filter((item: IActDetailData) => item.is_active) || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < files.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
      setCurrentIndex(0);
    }
  };
  const ref = useRef<HTMLDivElement | null>(null);
  // useClickOutside(ref, isOpen, setIsOpen);

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/60">
          <button
            onClick={handleNext}
            className="top-2 lg:top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-white" />
          </button>

          <div
            ref={ref}
            className="flex items-center justify-center w-fit md:h-full "
          >
            {files.length > 0 && (
              <DisplayPdf actDetailData={files[currentIndex]} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PdfModal;
