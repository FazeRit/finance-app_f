import { AxiosError } from "axios";

export const getErrorMessage = (
  error: AxiosError<{ message: string | string[] }>
): string => {
  let errorMessage = "Something went wrong";

  if (error.response?.data?.message) {
    errorMessage = Array.isArray(error.response.data.message)
      ? error.response.data.message.join("\n")
      : error.response.data.message;
  }

  return errorMessage;
};
