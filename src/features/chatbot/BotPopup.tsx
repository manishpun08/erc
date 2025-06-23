"use client";
import Image from "next/image";
import { useState } from "react";
import MessageUI from "./partials/MessageUI";

const BotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`right-4 bottom-4 z-50 fixed  ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className="relative"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            boxShadow: "0px 5px 19.9px 5px rgba(0, 0, 0, 0.06)",
          }}
          className="bg-background-200 p-5 border border-secondary-100 rounded-full pointer-events-auto background-blue-500"
        >
          <Image
            src={"/svg/bot-image.svg"}
            width={50}
            height={50}
            alt="bot image"
            className="size-[2.5rem]"
          />
        </button>

        <div
          className="-right-3 lg:right-0 bottom-0 md:bottom-full z-50 absolute mb-3 "
          style={{
            scrollbarWidth: "none",
          }}
        >
          <MessageUI isOpen={isOpen} closePopup={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};
export default BotPopup;
