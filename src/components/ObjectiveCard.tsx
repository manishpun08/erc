"use client";
import React from "react";

interface ObjectiveCardProps {
  ordering: number | string;
  title: string;
  description: string;
}

const ObjectiveCard = ({
  ordering,
  title,
  description,
}: ObjectiveCardProps) => {
  return (
    <div className="relative px-6 pt-8 pb-8 bg-background-50 shadow-sm rounded-[0.5rem] group">
      <div className="relative z-20">
        <button className="mx-auto w-11 h-11 p-5 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-[1.25rem] font-bold leading-[120%]">
          {ordering}
        </button>
        <p className="mt-5 typography-p-large-semi-bold text-text-400 group-hover:text-white text-center">
          {title}
        </p>
        <p
          className="mt-5 typography-p-regular text-text-400 group-hover:text-white text-center"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
      </div>

      <div
        style={{
          transitionProperty: "width, height",
          transitionDuration: "400ms, 400ms",
          transitionDelay: "0ms, 70ms",
        }}
        className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 bg-blue-400 w-24 h-3 rounded-t-[0.75rem] group-hover:w-full group-hover:h-full"
      />
    </div>
  );
};

export default ObjectiveCard;
