import ErrorMessage from "@/components/ErrorMessage";
import PhotoSlider from "./partials/PhotoSlider";
import { getData } from "@/api/fetch";
import { endpoints } from "@/api/endpoints";

interface PhotoGalleryDetailId {
  params: Promise<{ id: string }>;
}

const PhotoGalleryDetail = async ({ params }: PhotoGalleryDetailId) => {
  try {
    const { id } = await params;

    const photoDetailData = await getData(endpoints.photoDetail + `/${id}`);

    return (
      <div className="padding-x my-10">
        <PhotoSlider photoData={photoDetailData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching photo gallery data:", error);
    return <ErrorMessage errorMessage="photo gallery" />;
  }
};

export default PhotoGalleryDetail;
