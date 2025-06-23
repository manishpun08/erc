import React from "react";
import { IVideoDaum } from "../interface/interface";
import { getYoutubeEmbedUrl } from "@/utils/getYoutubeEmbedUrl";
import { useTranslations } from "next-intl";

interface IPropsVideo {
  videoData: IVideoDaum[];
}

const VideoCard: React.FC<IPropsVideo> = ({ videoData }) => {
  const t = useTranslations("Gallery");
  return (
    <section>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        {t("VideoGallery")}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem]">
        {videoData?.map((video) => (
          <div key={video.id} className="flex flex-col lg:gap-[0.88rem]">
            <div className="relative w-full lg:w-[26.15625rem] aspect-video">
              <iframe
                src={getYoutubeEmbedUrl(video.video_url)}
                title={video.title_en || "Embedded Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-[0.5rem]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCard;
