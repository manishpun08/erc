"use client";
import { PATH } from "@/constant/path";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  designation: string;
  email?: string;
  image: string;
  isChairperson?: boolean;
  id?: string;
}

const TeamCard = ({
  name,
  designation,
  image,
  id,
  isChairperson = false,
}: TeamCardProps) => {
  const t = useTranslations("home");

  return (
    <div className="w-full  group  flex flex-col bg-background-100 border-2 border-background-100 rounded-[0.5rem]">
      {/* Image */}
      <div className=" aspect-[250/240] overflow-hidden cursor-pointer w-full rounded-t-[0.5rem]">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-full rounded-t-[0.5rem] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="overflow-hidden flex justify-self-center h-44">
        <div className="p-[0.57rem] lg:p-[1.56rem] flex flex-col justify-between items text-center  w-full">
          <p className="text-blue-500 typography-p-large font-bold pb-[0.5rem] ">
            {name}
          </p>
          <p className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
            {designation}
          </p>
          {!isChairperson ? (
            <Link
              href={`${PATH.team_member_details}/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end"
            >
              {t("viewProfile")}
            </Link>
          ) : (
            <div className="flex gap-2 w-full">
              <Link
                href={`${PATH.team_member_details}/${id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end w-1/2"
              >
                {t("viewProfile")}
              </Link>
              <Link
                href={`${PATH.ABOUT}?tab=6`}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end w-1/2"
              >
                {t("message")}
              </Link>
            </div>
          )}
          {/* <Link
            href={`mailto:${email}`}
            className="typography-regular text-text-500 font-medium flex items-center lg:gap-[0.28rem] cursor-pointer"
          >
            <CiMail />
            {email}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
