import { useTranslations } from "next-intl";
import Introduction from "./Introduction";
import MissionVision from "./MissionVission";
import FunctionDuties from "./FunctionDuties";
import OrganizationStructure from "./OrganizationStructure";
import CeoMessage from "./CeoMessage";
import EmployeeDetail from "./EmployeeDetail";
import Commission from "./Commission";

export const useAboutSidebar = () => {
  const t = useTranslations("about");

  return [
    {
      name: t("Introduction"),
      key: "Introduction",
      content: <Introduction />,
    },
    {
      name: t("VisionAndMission"),
      key: "VisionAndMission",
      content: <MissionVision />,
    },
    // {
    //   name: t("ReportOverview"),
    //   key: "ReportOverview",
    //   content: <ReportOverview />,
    // },
    {
      name: t("FunctionsDuties"),
      key: "FunctionsDuties",
      content: <FunctionDuties />,
    },
    {
      name: t("Commission"),
      key: "Commission",
      content: <Commission />,
    },
    {
      name: t("OrganizationalStructure"),
      key: "OrganizationalStructure",
      content: <OrganizationStructure />,
    },
    {
      name: t("ChairpersonMessage"),
      key: "ChairpersonMessage",
      content: <CeoMessage />,
    },
    {
      name: t("EmployeeDetails"),
      key: "EmployeeDetails",
      content: <EmployeeDetail />,
    },
  ];
};
