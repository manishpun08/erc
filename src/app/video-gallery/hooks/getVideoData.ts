import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getVideoData = async () => {
  const videoData = await safeFetch(endpoints.videoList);

  return {
    videoData,
  };
};
