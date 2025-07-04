import React from "react";
import PhotoAlbum from "./partials/PhotoAlbum";
import { getGalleryPageData } from "./hooks/photoGallery.hooks";
import ErrorMessage from "@/components/ErrorMessage";
import { getData } from "@/api/fetch";
import { ISeoRoot } from "@/Interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/utils/generateMetaData";

interface Props {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
}

export async function generateMetadata() {
  try {
    const { data } = await getData<ISeoRoot>(endpoints.seo, {
      seo_for: "gallery",
    });

    const meta = createMetadata(data);

    return meta;
  } catch (error) {
    console.error(error, "Error fetching seo photo data");
    return <ErrorMessage errorMessage="seo photo data" />;
  }
}

const PhotoGallery: React.FC<Props> = async ({ searchParams }) => {
  try {
    const page = (await Number((await searchParams)?.page)) || 1;

    const { photoGalleryData, photoBanner } = await getGalleryPageData({
      page,
    });

    return (
      <div className="padding-x my-10">
        <PhotoAlbum
          photoData={photoGalleryData?.data}
          galleryBanner={photoBanner?.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching photo gallery data:", error);
    return <ErrorMessage errorMessage="photo gallery" />;
  }
};

export default PhotoGallery;
