import { mapFallback } from "@/helper/mapFallback";
import React from "react";

interface Props {
  mapUrl: string;
}

// Extract place and convert to a simple embed link
const getEmbedUrl = (rawUrl: string | undefined): string => {
  if (!rawUrl) return mapFallback;

  try {
    // Try to extract the place name after /dir// and before @
    const match = rawUrl.match(/\/dir\/.*?\/(.*?)@/);
    if (match) {
      const place = decodeURIComponent(match[1].replace(/\+/g, " "));
      return `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;
    }
  } catch (error) {
    console.error("Error parsing map URL:", error);
  }

  return mapFallback;
};

const Location: React.FC<Props> = ({ mapUrl }) => {
  const embedUrl = getEmbedUrl(mapUrl);

  return (
    <div className="my-10 w-full h-[600px]">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Location;
