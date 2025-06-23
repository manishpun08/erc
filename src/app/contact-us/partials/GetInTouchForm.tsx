"use client";
import { useTranslations } from "next-intl";
import { useContactForm } from "../hooks/useContact";

const GetInTouchForm = () => {
  const { formik, isLoading } = useContactForm();
  const t = useTranslations("contact");

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-8">
      {/* First Name */}
      <div>
        <label htmlFor="first_name" className="block mb-2 font-medium">
          {t("firstNameLabel")}
        </label>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder={t("firstNamePlaceholder")}
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded ${
            formik.touched.first_name && formik.errors.first_name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.first_name && formik.errors.first_name && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.first_name}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="last_name" className="block mb-2 font-medium">
          {t("lastNameLabel")}
        </label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          placeholder={t("lastNamePlaceholder")}
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded ${
            formik.touched.last_name && formik.errors.last_name
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.last_name && formik.errors.last_name && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.last_name}</p>
        )}
      </div>

      {/* Contact Number */}
      <div>
        <label htmlFor="phone_no" className="block mb-2 font-medium">
          {t("contactLabel")}
        </label>
        <input
          id="phone_no"
          name="phone_no"
          type="text"
          placeholder={t("contactPlaceholder")}
          value={formik.values.phone_no}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded ${
            formik.touched.phone_no && formik.errors.phone_no
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.phone_no && formik.errors.phone_no && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.phone_no}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div className="col-span-2">
        <label htmlFor="message" className="block mb-2 font-medium">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t("messagePlaceholder")}
          rows={5}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-3 border rounded ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="col-span-2">
        <button
          type="submit"
          className="text-white px-7 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 transition duration-300"
        >
          {isLoading ? t("submitting") : t("submit")}
        </button>
      </div>
    </form>
  );
};

export default GetInTouchForm;
