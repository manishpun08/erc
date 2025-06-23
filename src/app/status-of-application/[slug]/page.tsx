import ErrorMessage from "@/components/ErrorMessage";
import TableSOA from "./partails/TableSOA";

interface SOASlug {
  params: Promise<{ slug: string }>;
}

const StatusOfApplication = async ({ params }: SOASlug) => {
  try {
    const { slug } = await params;

    return (
      <div className="my-10">
        <TableSOA slug={slug} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching SOA data:", error);
    return <ErrorMessage errorMessage="SOA data" />;
  }
};

export default StatusOfApplication;
