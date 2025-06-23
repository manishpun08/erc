import connector from "@/assets/home/linee.png";
import { IChairperson } from "@/Interface/chairperson.interface";
import Image from "next/image";
import React from "react";
import { ITeamRecord } from "../Interface/team.interface";
import TeamCard from "./TeamCard";

interface Props {
  teamData: ITeamRecord[];
  chairperson: IChairperson;
}

const TeamSection: React.FC<Props> = ({ teamData, chairperson }) => {
  return (
    <div>
      {teamData?.length > 0 && (
        <div className="padding-x  mb-[2.5rem]">
          {/* Chairperson Block */}
          <div className="w-[21.53331rem] mx-auto group">
            <TeamCard
              name={chairperson?.name}
              designation={chairperson?.designation}
              email={chairperson?.email}
              image={chairperson?.image}
              isChairperson={true}
              id={chairperson?.slug}
            />
          </div>

          {/* Connector line */}
          <div className="hidden lg:block w-full px-[12%] -mt-2">
            <Image
              src={connector}
              alt="connector-line"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Other team members */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0 gap-4 lg:gap-5 max-w-[280rem] mx-auto">
            {teamData?.map((team, index) => (
              <TeamCard
                key={index}
                name={team.name}
                designation={team.designation}
                email={team.email}
                image={team.image}
                id={team.slug}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
