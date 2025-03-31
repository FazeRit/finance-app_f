import { css } from "@emotion/react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../../App.styles";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    height: 82,
    padding: 16,
    border: `1px solid ${COLORS.light_gray}`,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      backgroundColor: COLORS.light_gray,
      borderColor: COLORS.dark_slate,
      transform: "scale(1.02)",
    },
    ":active": {
      backgroundColor: COLORS.medium_gray,
      transform: "scale(0.98)",
      borderColor: COLORS.dark_slate,
    },
    "@media(max-width: 768px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "auto",
    },
  }),
  text: css({
    fontSize: 16,
    marginTop: 8,
    fontFamily: FONTS.Inter_18_Regular,
    "@media(max-width: 768px)": {
      fontSize: 14,
    },
  }),
};
