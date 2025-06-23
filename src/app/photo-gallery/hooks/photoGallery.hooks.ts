import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import { safeFetch } from "@/helper/safeFetch";

export const getGalleryPageData = async ({ page }: { page: number }) => {
  const perPage = 6;

  const photoGalleryData = await getData(`${endpoints.photoGallery}`, {
    p: page,
    page_size: perPage,
  });

  const photoBanner = await safeFetch(endpoints.photoBanner);

  return {
    photoGalleryData,
    photoBanner,
  };
};
