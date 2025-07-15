"use client";
import { PATH } from "@/constant/path";
import { formatNepaliDate } from "@/utils/formatDate";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";

type DocumentCardProps = {
  title: string;
  date: string;
  slug: string;
  slugBefore: string;
  file?: string;
  description?: string;
};

export default function DocumentCard({
  title,
  date,
  slug,
  slugBefore,
  file,
  description,
}: DocumentCardProps) {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <div
      className="flex justify-between items-center 
  py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 bg-white shadow-[0px_2px_18px_4px_rgba(51,96,169,0.06)] group cursor-pointer"
    >
      <div>
        {title !== "Online Application" ? (
          <Link
            href={`${PATH.ACT}/${slugBefore}/${slug}`}
            className="typography-p-regular text-text-500 font-medium group-hover:text-blue-500 transition-colors duration-300"
          >
            {title}
          </Link>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: description || "" }} />
        )}

        <p className="typography-p-small text-text-300 font-medium pt-[0.62rem]">
          {t("PublishedDate")}: {formatNepaliDate(date, locale)}
        </p>
      </div>

      <div className="flex items-center gap-[0.75rem]">
        <Link
          href={`${file}`}
          className="flex items-center justify-center w-[1.25rem] h-[1.25rem] lg:w-[2.125rem] lg:h-[2.125rem]"
          title="Download PDF"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/pdf2.svg"
            alt="pdf"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </Link>
        <Link
          href={`${PATH.ACT}/${slugBefore}/${slug}`}
          className="flex items-center justify-center "
          title="View Document"
        >
          <IoEyeSharp className="text-blue-400  lg:w-[2.125rem] lg:h-[2.125rem]" />
        </Link>
      </div>
    </div>
  );
}
