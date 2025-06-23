export const navLinks = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about_us",
    url: "/about",
    dropdown: [
      { name: "introduction", url: "/about?tab=Introduction" },
      { name: "vision_mission", url: "/about?tab=VisionAndMission" },
      { name: "ReportOverview", url: "/about?tab=ReportOverview" },
      { name: "function_duties", url: "/about?tab=FunctionsDuties" },
      { name: "commission", url: "/about?tab=Commission" },
      {
        name: "organizational_structure",
        url: "/about?tab=OrganizationalStructure",
      },
      { name: "chairperson_message", url: "/about?tab=ChairpersonMessage" },
      { name: "employee_details", url: "/about?tab=EmployeeDetails" },
    ],
  },

  {
    name: "status_of_application",
    url: "/status-of-application",
    dropdown: [],
  },
  {
    name: "gallery",
    url: "/gallery",
    dropdown: [
      { name: "photo_gallery", url: "/photo-gallery" },
      { name: "video_gallery", url: "/video-gallery" },
    ],
  },
  {
    name: "contact_us",
    url: "/contact-us",
  },
];
