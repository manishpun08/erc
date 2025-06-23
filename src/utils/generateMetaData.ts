import type { Metadata } from "next";

type SEOData = {
  meta_title: string;
  meta_description: string;
  canonical_url: string;
};

type ImageData = {
  url: string;
};
type VideoData = {
  url: string;
  width?: number;
  height?: number;
  type?: string; // e.g., "video/mp4"
};

export function createMetadata(
  seo: SEOData | null,
  imagesUrls?: ImageData[] | null,
  videoData?: VideoData
): Metadata {
  return {
    title:
      seo?.meta_title ||
      "Electricity Regulatory Commission | Government of Nepal",
    description:
      seo?.meta_description ||
      "Electricity Regulatory Commission | Government of Nepal",
    openGraph: {
      title:
        seo?.meta_title ||
        "Electricity Regulatory Commission | Government of Nepal",
      description:
        seo?.meta_description ||
        "Electricity Regulatory Commission | Government of Nepal",
      url: seo?.canonical_url || "https://erc.gov.np/",
      siteName: "Electricity Regulatory Commission | Government of Nepal",
      images:
        imagesUrls?.map((img) => ({
          url: img.url || "/erc_logo.png",
          width: 800,
          height: 600,
        })) ||
        "http://erc.gov.np/storage/settings/July2024/Bugd1DtTehAiELWOvpMt.png",
      videos: videoData
        ? [
            {
              url: videoData.url,
              width: videoData.width || 1280,
              height: videoData.height || 720,
              type: videoData.type || "video/mp4",
            },
          ]
        : undefined,
      locale: "en_US,",
      type: "website",
    },
    alternates: {
      canonical: seo?.canonical_url || "https://erc.gov.np/",
      languages: {
        "en-US": "/en-US",
      },
    },
  };
}
