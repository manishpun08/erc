import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IService {
  slug: string;
  icon: string;
  name: string;
}

const ServiceCardHome: React.FC<IService> = ({ slug, icon, name }) => {
  return (
    <div>
      <div className="flex gap-[0.75rem] items-center group relative">
        {/* Base Card */}
        <Link
          href={`/service/${slug}`}
          className="bg-blue-400 rounded-[0.5rem]  text-center relative overflow-hidden cursor-pointer w-full h-fit py-6"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 lg:w-[4rem] lg:h-[4rem] ">
              <Image
                src={icon}
                alt="Service Icon"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="typography-p-regular text-white pt-[0.75rem] ">
              {name}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardHome;
