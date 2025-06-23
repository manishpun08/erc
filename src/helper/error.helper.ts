import { showErrorMessage } from "../utils/toast";

type SetErrorCallback = (errors: Record<string, string>) => void;
type FieldError = {
  path: string;
  msg: string;
};

type ErrorResponse = {
  data?: {
    errors?: FieldError[];
    message?: string;
  };
};

export type ApiResponse = {
  error?: ErrorResponse;
  data?: {
    status: string;
    message: string;
  };
};
export const handleErrors = (
  response: ApiResponse,
  setErrorCallback: SetErrorCallback
): void => {
  if (response.error?.data) {
    if (Array.isArray(response.error.data.errors)) {
      const errorObject: Record<string, string> = {};
      response.error.data.errors.forEach(({ path, msg }) => {
        errorObject[path] = msg;
      });
      setErrorCallback(errorObject);
    } else if (response.error.data.message) {
      setErrorCallback({ general: response.error.data.message });
      showErrorMessage(response.error.data.message);
    }
  }
};

export const parseApiError = (error: unknown) => {
  if (typeof error === "object" && error !== null) {
    const err = error as {
      response?: {
        data?: {
          errorMessage?: string;
          error?: { message?: string };
          message?: string;
        };
      };
      data?: { message?: string; error?: string };
      error?: string;
      message?: string;
    };
    return (
      err.response?.data?.errorMessage ||
      err.response?.data?.error?.message ||
      err.response?.data?.message ||
      err.data?.message ||
      err.data?.error ||
      err.error ||
      err.message ||
      "An unknown error has occured"
    );
  }
  return "An unknown error has occured";
};
