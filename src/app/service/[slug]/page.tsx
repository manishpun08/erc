import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/fetch";
import ErrorMessage from "@/components/ErrorMessage";
import React from "react";
import ServiceDetailComponent from "./partails/ServiceDetailComponent";

interface ServiceSlug {
  params: Promise<{ slug: string }>;
}

const ServiceDetailPage = async ({ params }: ServiceSlug) => {
  try {
    const { slug } = await params;

    const serviceDetail = await getData(endpoints.serviceDetail + `${slug}`);
    return (
      <div>
        {serviceDetail?.data?.files.length > 0 ? (
          <ServiceDetailComponent serviceDetail={serviceDetail?.data} />
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            No Service for this yet
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching service data:", error);
    return <ErrorMessage errorMessage="service data" />;
  }
};

export default ServiceDetailPage;
