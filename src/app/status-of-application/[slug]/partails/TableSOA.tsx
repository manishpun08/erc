"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import TableData from "./Table";
import SoaBreadcrumb from "./SoaBreadcrumb";
import { useTranslations } from "next-intl";

interface TableSOAProps {
  slug: string;
}

const TableSOA = ({ slug }: TableSOAProps) => {
  const t = useTranslations("ComplaintStatus");

  const { data } = useGetDataQuery({
    url: endpoints.soaDetail + `/${slug}/`,
    params: {
      status: "Approved",
    },
  });

  return (
    <div>
      <div className="padding-x">
        <SoaBreadcrumb title={data?.data?.records[0]?.title} />
      </div>

      {/* Tab Content */}
      <div className="padding-x padding-y">
        <TableData soaTableData={data} />
      </div>
    </div>
  );
};

export default TableSOA;
