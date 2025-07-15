"use client";

import { IActRecord } from "@/Interface/document.interface";
import CustomPagination from "@/components/CustomPagination";
import DocumentCard from "./DocumentCard";
import { useParams } from "next/navigation";
import AnnualReport from "./AnnualReport";
import { useTranslations } from "next-intl";

interface DocumentListProps {
  annualReport: boolean;
  documents: IActRecord[];
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const PER_PAGE = 4;

const DocumentList: React.FC<DocumentListProps> = ({
  annualReport,
  documents,
  currentPage,
  pageCount,
  onPageChange,
}) => {
  const t = useTranslations("docs");

  const params = useParams<{ slug1: string }>();

  const paginatedDocs = documents.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <section className="md:col-span-3 space-y-[0.62rem]">
      {paginatedDocs?.length > 0 ? (
        paginatedDocs?.map((doc) =>
          annualReport ? (
            <AnnualReport
              key={doc?.id}
              title={doc?.title}
              slug={doc?.slug}
              slugBefore={params?.slug1}
              description={doc?.description}
              image={doc?.image}
            />
          ) : (
            <DocumentCard
              key={doc?.id}
              title={doc?.title}
              date={doc?.created_at}
              slug={doc?.slug}
              file={doc?.file}
              description={doc?.description}
              slugBefore={params?.slug1}
            />
          )
        )
      ) : (
        <p>{t("noDocuments")}</p>
      )}

      {pageCount > 0 && (
        <div className="mt-6">
          <CustomPagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </section>
  );
};

export default DocumentList;
