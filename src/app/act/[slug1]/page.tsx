import ErrorMessage from "@/components/ErrorMessage";
import DocumentPage from "../partials/DocumentPage";

interface ActSlug {
  params: Promise<{ slug1: string }>;
}

const ActPage = async ({ params }: ActSlug) => {
  try {
    const { slug1 } = await params;

    return (
      <div>
        <DocumentPage slug1={slug1} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Act data:", error);
    return <ErrorMessage errorMessage="Act data" />;
  }
};

export default ActPage;
