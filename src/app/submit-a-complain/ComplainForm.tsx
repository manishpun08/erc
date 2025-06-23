"use client";
import { useComplaintForm } from "@/hooks/useComplaintForm";
import { useTranslations } from "next-intl";
import React from "react";

const ComplaintForm: React.FC = () => {
  const t = useTranslations("ComplaintForm");

  const {
    formik,
    document,
    inputRef,
    formErrors,
    handleFileChange,
    resetForm,
    isLoading,
  } = useComplaintForm();

  type FormValues = typeof formik.values;

  const renderInput = <T extends keyof FormValues>(
    name: T,
    labelKey: string,
    type: string = "text",
    isTextArea: boolean = false
  ) => (
    <div className={`${isTextArea ? "col-span-1 md:col-span-2" : ""}`}>
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {t(`${labelKey}Label`)}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={t(`${labelKey}Placeholder`)}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={t(`${labelKey}Placeholder`)}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
      )}
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {typeof formik.errors[name] === "string"
            ? formik.errors[name]
            : JSON.stringify(formik.errors[name])}
        </p>
      )}
    </div>
  );

  return (
    <div>
      <h3 className="text-2xl text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        {t("title")}
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
      >
        {renderInput("first_name", "firstName")}
        {renderInput("last_name", "lastName")}
        {renderInput("phone_number", "phone")}
        {renderInput("email", "email")}
        {renderInput("address", "address")}

        <div>
          <label
            htmlFor="complain_type"
            className="block mb-2 font-medium text-gray-700"
          >
            {t("complainTypeLabel")}
          </label>
          <select
            id="complain_type"
            name="complain_type"
            value={formik.values.complain_type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.complain_type && formik.errors.complain_type
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="">{t("complainTypePlaceholder")}</option>
            <option value="Billing Issue">{t("type.billing")}</option>
            <option value="Power Outage">{t("type.outage")}</option>
            <option value="Voltage Fluctuation">{t("type.fluctuation")}</option>
            <option value="Meter Problem">{t("type.meter")}</option>
            <option value="Other">{t("type.other")}</option>
          </select>
          {formik.touched.complain_type && formik.errors.complain_type && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.complain_type}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="document"
            className="block mb-2 font-medium text-gray-700"
          >
            {t("uploadLabel")}
          </label>
          <input
            ref={inputRef}
            id="document"
            name="document"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center">
            <button
              type="button"
              className="bg-white px-6 py-2 text-blue-500 border border-blue-500 rounded-md"
              onClick={() => inputRef.current?.click()}
            >
              {t("uploadLabel")}
            </button>
            <span className="text-gray-500 pl-3 py-2">
              {document ? document.name : t("uploadPlaceholder")}
            </span>
          </div>
          {formErrors.document && (
            <p className="text-red-500 text-sm mt-1">{formErrors.document}</p>
          )}
        </div>

        {renderInput("description", "description", "text", true)}

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? t("submitting") : t("submit")}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="px-7 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300"
          >
            {t("reset")}
          </button>
          <button
            type="button"
            className="px-7 py-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            {t("cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
