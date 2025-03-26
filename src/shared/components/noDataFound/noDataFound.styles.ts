import { css } from "@emotion/react";
import { FONTS } from "../../../App.styles";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: FONTS.Inter_18_Regular
  }),
  heading: css({
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "12px",
  }),
  text: css({
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
  })
};