import Image from "next/image";
import React from "react";

const TranslationLoader = () => {
  return (
    <div className="flex justify-center items-center mx-auto h-screen z-50">
      <div className="w-40 h-40 ">
        <Image
          src="/translation.gif"
          alt="Loading animation"
          width={800}
          height={800}
          className="w-full h-full object-cover "
          unoptimized
        />
      </div>
    </div>
  );
};

export default TranslationLoader;
