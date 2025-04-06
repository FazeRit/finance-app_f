import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  modal: {
    position: "fixed" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    borderRadius: "12px",
    minWidth: "300px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    padding: "24px",
    overflowY: "auto" as const,
    transition: "all 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  closeButton: {
    position: "absolute" as const,
    top: "10px",
    right: "10px",
    color: COLORS.medium_gray,
    fontSize: "20px",
    background: COLORS.light_gray,
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    ":hover": {
      background: "#e0e0e0",
      transform: "scale(1.1)",
    },
  },
  title: {
    fontSize: "24px",
    fontFamily: FONTS.Inter_24_Regular,
    color: COLORS.dark_slate,
    textAlign: "center" as const,
  },
};
