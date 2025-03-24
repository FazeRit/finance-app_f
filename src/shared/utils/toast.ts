import { toast } from "react-toastify";


export const notify = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info",
) => {
  toast[type](message);
};
