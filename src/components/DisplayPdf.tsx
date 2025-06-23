"use client";

import expandIcon from "@/assets/actRuleDetail/expand.svg";
// import optionIcon from "@/assets/actRuleDetail/option.svg";
import zoomInIcon from "@/assets/actRuleDetail/zoomin.svg";
import zoomOutIcon from "@/assets/actRuleDetail/zoomout.svg";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { IActDetailData } from "../app/act/[slug1]/[slug]/interface/actDetail.interface";
import LoadingPdf from "./LoadingPdf";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

interface IProps {
  actDetailData: IActDetailData;
}

export const DisplayPdf: React.FC<IProps> = ({ actDetailData }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const viewerRef = useRef<HTMLDivElement>(null);
  const pdfUrl = actDetailData?.file;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };

  const nextPage = () => {
    if (numPages && pageNumber < numPages) {
      changePage(1);
    }
  };

  const toggleFullScreen = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (!document.fullscreenElement) {
      viewer.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div ref={viewerRef} className="relative h-full py-4 px-2 sm:px-4">
      <div className="w-full mx-auto h-full flex justify-center overflow-hidden">
        <Document
          file={pdfUrl}
          onLoadStart={() => setLoading(true)}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error("Error loading PDF:", error);
            setLoading(false);
          }}
          loading={
            <div>
              <LoadingPdf />
            </div>
          }
          error={<div>Failed to load PDF file.</div>}
          className="h-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pageNumber}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <Page
                scale={scale}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="w-auto h-auto"
                width={
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? window.innerWidth - 32
                    : undefined
                }
                height={750}
              />
            </motion.div>
          </AnimatePresence>
        </Document>
      </div>

      {/* Show below only when not loading */}
      {numPages && !loading && (
        <>
          {/* Left and Right Navigation Buttons */}
          <div className="absolute top-1/2 left-2  lg:left-4 -translate-y-1/2 z-10">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="p-2 sm:p-3"
            >
              <ChevronLeft
                className={`w-6 h-6 sm:w-8 sm:h-8 ${
                  pageNumber > 1 ? "text-blue-500" : "text-gray-300"
                }`}
              />
            </button>
          </div>

          <div className="absolute top-1/2 right-2 lg:right-4 -translate-y-1/2 z-10">
            <button
              type="button"
              disabled={pageNumber >= (numPages || 0)}
              onClick={nextPage}
              className="p-2 sm:p-3"
            >
              <ChevronRight
                className={`w-6 h-6 sm:w-8 sm:h-8 ${
                  pageNumber < (numPages || 0)
                    ? "text-blue-500"
                    : "text-gray-300"
                }`}
              />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="bg-white rounded-lg shadow-[0px_2px_16px_rgba(0,0,0,0.1)] absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 sm:gap-4 px-2 py-5 z-10">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <ChevronLeft
                className={`w-5 h-5 ${
                  pageNumber > 1 ? "text-blue-500" : "text-gray-300"
                }`}
              />
            </button>

            <p className="text-xs font-medium w-max">
              {pageNumber} / {numPages}
            </p>

            <button
              type="button"
              disabled={pageNumber >= (numPages || 0)}
              onClick={nextPage}
            >
              <ChevronRight
                className={`w-5 h-5 ${
                  pageNumber < (numPages || 0)
                    ? "text-blue-500"
                    : "text-gray-300"
                }`}
              />
            </button>

            {/* Zoom In */}
            <button
              onClick={() => setScale((prev) => Math.min(prev + 0.1, 3))}
              type="button"
            >
              <Image
                alt="Zoom In"
                src={zoomInIcon}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </button>

            {/* Zoom Out */}
            <button
              onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))}
              type="button"
            >
              <Image
                alt="Zoom Out"
                src={zoomOutIcon}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </button>

            {/* Expand */}
            <button onClick={toggleFullScreen} type="button">
              <Image
                alt="Expand"
                src={expandIcon}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </button>

            {/* Options */}
            {/* <button type="button">
              <Image
                alt="Options"
                src={optionIcon}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </button> */}
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayPdf;
