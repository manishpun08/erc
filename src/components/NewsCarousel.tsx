import { getNavNewsData } from "@/hooks/globalHook";
import ErrorMessage from "./ErrorMessage";
import { INewsRecord } from "@/Interface/news.interface";
import NewsSwiper from "./NewsSwiper";

const NewsCarousel = async () => {
  try {
    const navNewsData = await getNavNewsData();
    const newsData: INewsRecord[] = navNewsData?.data?.records || [];

    if (newsData?.length > 0) {
      return null;
    }
    // Pass newsData as prop to client side component
    return <NewsSwiper newsData={newsData} />;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return <ErrorMessage errorMessage="news data" />;
  }
};

export default NewsCarousel;
