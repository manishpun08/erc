import Hero from "./partials/Hero";
import ImpServices from "./partials/ImpServices";

import ErrorMessage from "@/components/ErrorMessage";
import TeamSection from "../../components/TeamSection";
import { getHomePageData } from "./hooks/home.hook";
import MandatesCommission from "./partials/MandatesCommission";
import MissionVision from "./partials/MissionVision";
// import { getData } from "@/api/fetch";
// import { endpoints } from "@/api/endpoints";
// import { ISeoRoot } from "@/Interface/seo.interface";
// import { createMetadata } from "@/utils/generateMetaData";
import ServiceLatestNotices from "./partials/LatestNotices";

import SupportTeam from "./partials/SupportTeam";

// export async function generateMetadata() {
//   try {
//     const { data } = await getData<ISeoRoot>(endpoints.seo, {
//       seo_for: "homepage",
//     });

//     const meta = createMetadata(data);

//     return meta;
//   } catch (error) {
//     console.error(error, "Error fetching seo home data");
//     return <ErrorMessage errorMessage="seo home data" />;
//   }
// }

const Home = async () => {
  try {
    const {
      homeData,
      impServiceData,
      missionVisionData,
      serviceData,
      teamData,
      chairperson,
    } = await getHomePageData();

    return (
      <div className="mb-10">
        <Hero heroData={homeData?.data[0]} />
        <ImpServices impServiceData={impServiceData?.data} />
        <MissionVision
          missionVisionData={missionVisionData?.data?.mission_vision || []}
        />
        <ServiceLatestNotices serviceData={serviceData?.data} />
        <TeamSection
          teamData={teamData?.data?.records}
          chairperson={chairperson?.data?.records[0]}
        />
        <MandatesCommission
          mandatesData={missionVisionData?.data?.goals_objectives || []}
        />
        <SupportTeam />{" "}
        {/* <TeamBottom teamData={teamData?.data?.records} /> */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage errorMessage="home data" />;
  }
};

export default Home;
