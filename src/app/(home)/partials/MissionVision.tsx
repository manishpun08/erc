import Image from "next/image";
import React from "react";
import { IMissionVisionMissionVision } from "../interface/homeMissionVision.interface";

interface Props {
  missionVisionData: IMissionVisionMissionVision[];
}

const MissionVision: React.FC<Props> = ({ missionVisionData }) => {
  return (
    <div className="bg-background-100 rounded-[0.25rem] mb-[1.5rem] lg:mb-[2.5rem]">
      <div className="p-[1rem] lg:p-[5rem] flex flex-col lg:flex-row gap-[2.5rem]  items-center">
        <div className="lg:w-3xl lg:h-[25rem]">
          <Image
            src={missionVisionData?.[1]?.image}
            alt="mission & vision image"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full ">
          <h2 className="typography-h3 font-bold leading-[150%] text-text-500 pb-[0.75rem]">
            {missionVisionData?.[0]?.title}
          </h2>

          <p className="typography-p-large capitalize text-text-500 font-semibold pb-[0.62rem]">
            {missionVisionData?.[1]?.select}
          </p>

          <p
            className="typography-p-regular text-text-400 text-justify pb-[0.88rem]"
            dangerouslySetInnerHTML={{
              __html: missionVisionData?.[1]?.description || "",
            }}
          />

          <p className="typography-p-large capitalize text-text-500 font-semibold pb-[0.62rem] pt-[0.88]">
            {missionVisionData?.[0]?.select}
          </p>
          <p
            className="typography-p-regular text-text-400 text-justify pb-[0.88rem]"
            dangerouslySetInnerHTML={{
              __html: missionVisionData?.[0]?.description || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
