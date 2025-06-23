import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import ErrorMessage from "@/components/ErrorMessage";
import TopDetailPage from "@/components/TopDetailPage";
import { INewsRecord } from "@/Interface/news.interface";
import Image from "next/image";
import React from "react";

interface INewsDetailSlug {
  params: Promise<{ slug: string }>;
}

const NewsDetail = async ({ params }: INewsDetailSlug) => {
  try {
    const { slug } = await params;
    const newsDetail = await getData(endpoints.newsDetail + `/${slug}`);
    const newsData: INewsRecord = newsDetail?.data;

    return (
      <div>
        <TopDetailPage detailData={newsData} />

        <div className="padding-x my-10">
          <div className="w-full h-[30rem] ">
            <Image
              src={newsData?.image}
              alt={newsData?.title || "news image"}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <p
            className="my-10"
            dangerouslySetInnerHTML={{
              __html: newsData?.description,
            }}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching NewsDetail data:", error);
    return <ErrorMessage errorMessage="NewsDetail data" />;
  }
};

export default NewsDetail;
