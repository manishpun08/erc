import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

import { ITeamRecord } from "@/Interface/team.interface";
import { useRouter, useSearchParams } from "next/navigation";
export const useCommission = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFormerMember = searchParams.get("is_former_member") === "true";

  const { data, error } = useGetDataQuery({
    url: endpoints.homeTeam,
    params: {
      former_member: isFormerMember ? "true" : "false",
      former_chairperson: isFormerMember ? "true" : "false",
    },
  });

  const { data: chairpersonData, error: chairpersonError } = useGetDataQuery({
    url: endpoints.chairperson,
  });

  const handleFilter = (isFormer: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("is_former_member", String(isFormer));
    router.push(`?${newSearchParams.toString()}`);
  };

  const aboutCommission: ITeamRecord[] = data?.data?.records;
  return {
    aboutCommission,
    error,
    handleFilter,
    isFormerMember,
    chairpersonData,
    chairpersonError,
  };
};
