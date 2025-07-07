import ErrorMessage from "@/components/ErrorMessage";
import TeamCard from "@/components/TeamCard";

import { useCommission } from "../hooks/useCommission";

const Commission = () => {
  const {
    aboutCommission,
    error,
    handleFilter,
    isFormerMember,
    // chairpersonData,
    chairpersonError,
  } = useCommission();
  if (error || chairpersonError) {
    console.error("Failed to load commission data:", error);
    return <ErrorMessage errorMessage="commission data" />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-0 gap-4 lg:gap-8">
        {aboutCommission?.map((team, index) => (
          <TeamCard
            key={index}
            designation={team?.designation}
            email={team?.email}
            image={team?.image}
            name={team?.name}
            id={team?.slug}
          />
        ))}
      </div>
      <div className="flex justify-between gap-4 my-10 items-center w-full">
        <button
          disabled={!isFormerMember}
          onClick={() => handleFilter(false)}
          className={` text-white uppercase font-semibold typography-p-regular px-4 py-2 rounded-[0.5rem] cursor-pointer ${isFormerMember ? "bg-blue-500 cursor-pointer" : "bg-blue-500/50 cursor-not-allowed "} `}
        >
          Previous Members
        </button>
        <button
          disabled={isFormerMember}
          onClick={() => handleFilter(true)}
          className={` text-white uppercase font-semibold typography-p-regular px-4 py-2 rounded-[0.5rem] cursor-pointer ${!isFormerMember ? "bg-blue-500 cursor-pointer" : "bg-blue-500/50 cursor-not-allowed"} `}
        >
          Previous Members
        </button>
      </div>
    </div>
  );
};

export default Commission;
