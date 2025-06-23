import React from "react";
import VideoCard from "./partials/VideoCard";
import ErrorMessage from "@/components/ErrorMessage";
import { getVideoData } from "./hooks/getVideoData";
import { getData } from "@/api/fetch";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/utils/generateMetaData";
import { ISeoRoot } from "@/Interface/seo.interface";

export async function generateMetadata() {
  try {
    const { data } = await getData<ISeoRoot>(endpoints.seo, {
      seo_for: "video",
    });

    const meta = createMetadata(data);

    return meta;
  } catch (error) {
    console.error(error, "Error fetching seo video data");
    return <ErrorMessage errorMessage="seo video data" />;
  }
}

const VideoGallery = async () => {
  try {
    const { videoData } = await getVideoData();

    return (
      <div className="padding-x my-10">
        <VideoCard videoData={videoData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching video data:", error);
    return <ErrorMessage errorMessage="video data" />;
  }
};

export default VideoGallery;
