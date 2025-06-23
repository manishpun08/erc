import TeamCard from "@/components/TeamCard";
import { ITeamRecord } from "@/Interface/team.interface";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  teamData: ITeamRecord[];
}

const TeamBottom: React.FC<Props> = ({ teamData }) => {
  const t = useTranslations("home");
  return (
    <div className="mb-[1.5rem] lg:mb-[2.5rem] padding-x">
      <h3 className="text-text-500 font-bold typography-h3 leading-[150%] pb-[1.25rem]">
        {t("Technical")}
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0 gap-4 lg:gap-10 max-w-[280rem] mx-auto ">
        {teamData?.map((team, index) => (
          <TeamCard
            key={index}
            name={team.name}
            designation={team.designation}
            email={team.email}
            image={team.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamBottom;
