"use client";

import { useFormik } from "formik";
import { Send } from "lucide-react";
import React from "react";

const MessageInput: React.FC<{
  sendMessage: (message: string) => void;
  disabled: boolean;
}> = ({ sendMessage, disabled }) => {
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      if (!values.message || disabled) return;
      sendMessage(values.message);
      formik.setFieldValue("message", "");
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <label className="flex items-center gap-2 bg-light-variant-100 pr-5 border border-text-50 rounded-[1.25rem] bg-blue-50/40">
        <input
          type="text"
          placeholder="Type your message..."
          {...formik.getFieldProps("message")}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoFocus
          className="flex-1 py-4 pl-5 rounded-full outline-0 focus:outline-none h-max text-text-300"
        />
        <button
          disabled={disabled}
          type="submit"
          className="disabled:opacity-50 hover:brightness-110 cursor-pointer"
        >
          <Send className="text-blue-400" />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
