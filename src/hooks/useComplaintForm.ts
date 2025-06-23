import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { ApiResponse, handleErrors } from "@/helper/error.helper";
import { showSuccessMessage } from "@/utils/toast";

export const useComplaintForm = () => {
  const [document, setDocument] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<{ document?: string }>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const [postComplain, { isLoading }] = usePostDataMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      setDocument(file);
      setFormErrors({});
    }
  };

  // const {data:ComplainType} = useGetDataQuery({
  //   url:endpoints?.
  // })

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      address: "",
      complain_type: "",
      description: "",
    },

    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      phone_number: Yup.string()
        .matches(
          /^\+?[0-9]{10,15}$/,
          "Phone number must be valid and can include country code"
        )
        .required("Contact number is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      complain_type: Yup.string().required("Please select a complaint type"),
      description: Yup.string().required("Complaint message is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postComplain({
          url: `${endpoints.createComplain}`,
          data: values,
        });

        if (response.error) {
          handleErrors(response as ApiResponse, formik.setErrors);
          return;
        }

        if (response.data.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
          setDocument(null);
        }
      } catch (error) {
        console.error("Failed to submit complaint form:", error);
      }
    },
  });

  const resetForm = () => {
    formik.resetForm();
    setDocument(null);
    setFormErrors({});
  };

  return {
    formik,
    document,
    inputRef,
    formErrors,
    handleFileChange,
    resetForm,
    isLoading,
  };
};
