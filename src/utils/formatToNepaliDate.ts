import NepaliDate from "nepali-date-converter";

export const formatToNepaliDate = (dateString: string) => {
  const adDate = new Date(dateString);
  const bsDate = new NepaliDate(adDate); // Converts AD -> BS

  const nepaliMonths = [
    "Baisakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];

  const month = nepaliMonths[bsDate.getMonth()];
  const day = bsDate.getDate();
  const year = bsDate.getYear();

  return `${month} ${day}, ${year}`;
};
