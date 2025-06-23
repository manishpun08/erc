import { PATH } from "@/constant/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type DocumentCardProps = {
  title: string;
  slug: string;
  slugBefore: string;
  description: string;
  image: string;
};

const AnnualReport = ({
  title,
  slug,
  slugBefore,
  description,
  image,
}: DocumentCardProps) => {
  return (
    <div>
      <div className="p-4 bg-background-500 rounded-[0.5rem] flex gap-[1.5rem] overflow-hidden">
        <Link
          href={`${PATH.ACT}/${slugBefore}/${slug}`}
          className="w-[15rem] h-[18rem] border-b-[0.5px] border-text-100 shrink-0 rounded-lg"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-lg"
          />
        </Link>
        <div>
          <h1 className="typography-p-large font-semibold text-text-500 pb-[1rem]">
            {title}
          </h1>
          <p
            className="text-text-400 typography-p-regular text-justify text-wrap "
            dangerouslySetInnerHTML={{
              __html: description || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
