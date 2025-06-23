"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PublicHearingForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      hearing_date: "",
      hearing_time: "",
      first_name: "",
      last_name: "",
      mobile_number: "",
      email: "",
      user_type: "",
      make_presentation: false,
      make_oral_submission: false,
    },
    validationSchema: Yup.object({
      hearing_date: Yup.string().required("Public hearing date is required"),
      hearing_time: Yup.string().required("Hearing time is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      mobile_number: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      user_type: Yup.string().required("User type is required"),
      make_presentation: Yup.boolean(),
      make_oral_submission: Yup.boolean(),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        // console.log("Submission result:", values);

        resetForm();
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div>
      <h3 className="text-2xl text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Public Hearing Registration
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-8"
        encType="multipart/form-data"
      >
        {/* Public Hearing Date */}
        <div>
          <h4 className="text-xl font-medium text-gray-700 mb-4">
            Public Hearing Date
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="hearing_date"
                className="block mb-2 font-medium text-gray-700"
              >
                Public Hearing Date <span className="text-red-500">*</span>
              </label>
              <input
                id="hearing_date"
                name="hearing_date"
                type="date"
                value={formik.values.hearing_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.hearing_date && formik.errors.hearing_date
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.hearing_date && formik.errors.hearing_date
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.hearing_date && formik.errors.hearing_date
                    ? "hearing_date-error"
                    : undefined
                }
              />
              {formik.touched.hearing_date && formik.errors.hearing_date && (
                <p
                  id="hearing_date-error"
                  className="text-red-500 text-sm mt-1"
                >
                  {formik.errors.hearing_date}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="hearing_time"
                className="block mb-2 font-medium text-gray-700"
              >
                Hearing Time
              </label>
              <input
                id="hearing_time"
                name="hearing_time"
                type="time"
                value={formik.values.hearing_time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.hearing_time && formik.errors.hearing_time
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.hearing_time && formik.errors.hearing_time
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.hearing_time && formik.errors.hearing_time
                    ? "hearing_time-error"
                    : undefined
                }
              />
              {formik.touched.hearing_time && formik.errors.hearing_time && (
                <p
                  id="hearing_time-error"
                  className="text-red-500 text-sm mt-1"
                >
                  {formik.errors.hearing_time}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div>
          <h4 className="text-xl font-medium text-gray-700 mb-4">
            Personal Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter Your First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.first_name && formik.errors.first_name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.first_name && formik.errors.first_name
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.first_name && formik.errors.first_name
                    ? "first_name-error"
                    : undefined
                }
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <p id="first_name-error" className="text-red-500 text-sm mt-1">
                  {formik.errors.first_name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter Your Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.last_name && formik.errors.last_name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.last_name && formik.errors.last_name
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.last_name && formik.errors.last_name
                    ? "last_name-error"
                    : undefined
                }
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <p id="last_name-error" className="text-red-500 text-sm mt-1">
                  {formik.errors.last_name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile_number"
                className="block mb-2 font-medium text-gray-700"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile_number"
                name="mobile_number"
                type="tel"
                placeholder="Enter Your Mobile Number"
                value={formik.values.mobile_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.mobile_number && formik.errors.mobile_number
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.mobile_number && formik.errors.mobile_number
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.mobile_number && formik.errors.mobile_number
                    ? "mobile_number-error"
                    : undefined
                }
              />
              {formik.touched.mobile_number && formik.errors.mobile_number && (
                <p
                  id="mobile_number-error"
                  className="text-red-500 text-sm mt-1"
                >
                  {formik.errors.mobile_number}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.email && formik.errors.email ? "true" : "false"
                }
                aria-describedby={
                  formik.touched.email && formik.errors.email
                    ? "email-error"
                    : undefined
                }
              />
              {formik.touched.email && formik.errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Organisation Details */}
        <div>
          <h4 className="text-xl font-medium text-gray-700 mb-4">
            Organisation Details
          </h4>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="user_type"
                className="block mb-2 font-medium text-gray-700"
              >
                User Type <span className="text-red-500">*</span>
              </label>
              <select
                id="user_type"
                name="user_type"
                value={formik.values.user_type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formik.touched.user_type && formik.errors.user_type
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                aria-invalid={
                  formik.touched.user_type && formik.errors.user_type
                    ? "true"
                    : "false"
                }
                aria-describedby={
                  formik.touched.user_type && formik.errors.user_type
                    ? "user_type-error"
                    : undefined
                }
              >
                <option value="">-Select-</option>
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
                <option value="government">Government</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.user_type && formik.errors.user_type && (
                <p id="user_type-error" className="text-red-500 text-sm mt-1">
                  {formik.errors.user_type}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="make_presentation"
                className="flex-1 font-medium text-gray-700"
              >
                Whether you/your Organization propose to make a presentation
                during the public Hearing (if Yes Please tick):
              </label>
              <span className="px-0.5">Yes</span>
              <input
                id="make_presentation"
                name="make_presentation"
                type="checkbox"
                checked={formik.values.make_presentation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="make_oral_submission"
                className="flex-1 font-medium text-gray-700"
              >
                Whether you/your Organization propose to give a Oral Submission
                during the public Hearing (if Yes Please tick):
              </label>
              <span className="px-0.5">Yes</span>
              <input
                id="make_oral_submission"
                name="make_oral_submission"
                type="checkbox"
                checked={formik.values.make_oral_submission}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-[2.12rem]">
          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Resting..." : "Reset"}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg border border-blue-500 text-blue-500  transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Canceling..." : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublicHearingForm;
