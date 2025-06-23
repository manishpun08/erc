"use client";
import CustomPagination from "@/components/CustomPagination";
import usePaginationChange from "@/hooks/usePaginationHook";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IGalleryBanner, IGalleryData } from "../interface/photo.interface";
import { useTranslations } from "next-intl";

interface Props {
  photoData: IGalleryData;
  galleryBanner: IGalleryBanner;
}

const PhotoAlbum: React.FC<Props> = ({ photoData, galleryBanner }) => {
  const t = useTranslations("Gallery");

  const { handlePageChange, currentPage } = usePaginationChange();

  const galleryPhotoData = photoData?.records;

  const pageCount = photoData?.totalPages;

  return (
    <div>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        {t("PhotoGallery")}
      </h3>

      {/* photo banner  */}
      <div className="w-full lg:h-[30rem] mb-[3.03rem]">
        <Image
          src={galleryBanner?.image}
          alt="photo-banner"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem] mb-[2.5rem]">
        {galleryPhotoData?.map((photo) => (
          <div key={photo?.id} className="flex flex-col lg:gap-[0.88rem] group">
            <Link
              href={`photo-gallery/${photo?.id}`}
              className="w-full lg:w-[26.15625rem]  lg:aspect-[418.50/279] overflow-hidden"
            >
              <Image
                src={photo?.thumbnail}
                alt={photo?.title || "photo"}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-[0.5rem] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </Link>
            <div className="lg:w-[26.15625rem] rounded-[0.5rem] border-[0.15px] border-text-50 bg-background-50 shadow-[0px_2px_18px_4px_rgba(0,0,0,0.06)] mt-2 lg:mt-0">
              <p className="p-2 lg:pl-[1.5rem] py-2 lg:py-[0.88rem] text-text-500 typography-p1-regular font-medium lg:font-semibold">
                {photo?.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageCount={pageCount}
      />
    </div>
  );
};

export default PhotoAlbum;
