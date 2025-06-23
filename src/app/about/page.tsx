import { getData } from "@/api/fetch";
import AboutPage from "./partials/AboutPage";
import { endpoints } from "@/api/endpoints";
import { ISeoRoot } from "@/Interface/seo.interface";
import { createMetadata } from "@/utils/generateMetaData";
import ErrorMessage from "@/components/ErrorMessage";

export async function generateMetadata() {
  try {
    const { data } = await getData<ISeoRoot>(endpoints.seo, {
      seo_for: "about-us",
    });

    const meta = createMetadata(data);

    return meta;
  } catch (error) {
    console.error(error, "Error fetching seo video data");
    return <ErrorMessage errorMessage="seo video data" />;
  }
}

const AboutUs = async () => {
  return (
    <div className=" bg-background-400 ">
      <AboutPage />
    </div>
  );
};

export default AboutUs;
