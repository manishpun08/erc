import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostDataMutation } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { showSuccessMessage } from "@/utils/toast";
import { ApiResponse, handleErrors } from "@/helper/error.helper";

interface IContactFormValues {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [postContact, { isLoading }] = usePostDataMutation();

  const formik = useFormik<IContactFormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_no: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),

      last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),

      phone_no: Yup.string()
        .required("Contact number is required")
        .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await postContact({
          url: `${endpoints.contact}`,
          data: values,
        });

        if (response.error) {
          handleErrors(response as ApiResponse, formik.setErrors);
          return;
        }

        if (response.data.status === "success") {
          showSuccessMessage(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Failed to submit contact form:", error);
      }
    },
  });

  return {
    formik,
    isLoading,
  };
};
