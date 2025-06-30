import { IEmployeeDetail } from "@/app/about/interface/employee.interface";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
interface Props {
  team: IEmployeeDetail;
}

const EmployeeCard: React.FC<Props> = ({ team }) => {
  return (
    <>
      <div className="w-full group flex flex-col bg-background-100 border-2 border-background-100 rounded-[0.5rem]">
        <div className=" max-h-[20rem] aspect-[260/290] overflow-hidden cursor-pointer w-full rounded-t-[0.5rem]">
          <Image
            src={team?.image}
            alt={team?.name}
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-t-[0.5rem] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="  overflow-hidden">
          <div className="p-[0.57rem] lg:p-[1.56rem] text-center">
            <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
              {team?.name}
            </h2>
            <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
              {team?.designation}
            </h3>

            <Link
              href={`mailto:${team?.email}`}
              style={{
                wordBreak: "break-all",
              }}
              className="text-xs lg:typography-regular text-text-500 font-medium flex  text-wrap lg:gap-[0.28rem] cursor-pointer"
            >
              <div className="mt-1">
                <CiMail />
              </div>
              {team?.email}
            </Link>
            {team?.phone && (
              <Link
                href={` tel:${team?.phone}`}
                style={{
                  wordBreak: "break-all",
                }}
                className="text-xs lg:typography-regular text-text-500 font-medium flex  text-wrap lg:gap-[0.28rem] cursor-pointer"
              >
                <div className="mt-1">
                  <FaPhone />
                </div>
                {team?.phone}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
