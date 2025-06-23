interface TimeFormatInput {
  timeString: string;
}

interface TimeFormatOutput {
  formattedTime: string;
}

export const formatTime = (
  timeString: TimeFormatInput["timeString"]
): TimeFormatOutput["formattedTime"] => {
  if (!timeString) return "";

  // Split the time string by colon
  const parts: string[] = timeString.split(":");

  // Extract hours and minutes
  const hours: number = parseInt(parts[0]);
  const minutes: string = parts[1];

  // Determine AM/PM
  const period: string = hours >= 12 ? "PM" : "AM";
  const displayHours: number = hours % 12 || 12; // Convert to 12-hour format

  return `${displayHours}:${minutes} ${period}`;
};
