"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { IFaqData } from "../interface/faq.interface";

interface AccordionProps {
  items: IFaqData[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <h3 className="text-black typography-h3 leading-[150%] font-semibold pb-4">
        FAQ
      </h3>

      <div className="w-full lg:w-2xl mx-auto space-y-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className="rounded-[0.5rem] border-l-3 border-blue-300 bg-white shadow-[0px_2px_18px_4px_rgba(51,96,169,0.06)] cursor-pointer"
          >
            <button
              onClick={() => toggle(index)}
              className="relative group w-full px-6 py-4 flex justify-between items-center bg-white typography-p1-regular font-medium text-text-500 rounded-[0.75rem]"
            >
              {item?.question}
              <span>
                {
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                }
              </span>

              {/* Underline animation */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-full bg-blue-500 origin-center transition-transform duration-300 ${
                  activeIndex === index ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </button>
            <p
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40 py-4" : "max-h-0"
              } bg-white typography-p1-regular  text-text-500`}
              dangerouslySetInnerHTML={{ __html: item?.answer || "" }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
