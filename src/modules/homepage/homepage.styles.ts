import { css } from "@emotion/react";
import { COLORS } from "../../shared/styles/colors";
import { FONTS } from "../../App.styles";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    margin: "0 auto",
    gap: 16,
    "@media(max-width: 768px)": {
      margin: 0,
      height: "100vh",
    },
  }),
  sectionTop: css({
    display: "flex",
    flexDirection: "row",
    gap: 16,
    "@media(max-width: 1440px)": {
      width: 700,
      flexDirection: "column",
      alignItems: "center",
    },
    "@media(max-width: 768px)": {
      width: "auto",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
  cardContainer: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "auto",
    gap: 16,
    "@media(max-width: 768px)": {
      width: 358,
    },
  }),
  diagramContainer: css({
    display: "grid",
    alignSelf: "center",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 24,
    backgroundColor: "inherit",
    maxWidth: 1170,
    "@media(max-width: 1440px)": {
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      margin: 0,
    },
    "@media(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      maxWidth: 358,
      gap: 8,
    },
  }),
  diagram: css({
    maxWidth: 358,
    width: "100%",
    height: 260,
    "&:nth-child(3)": {
      "@media(max-width: 1440px)": {
        display: "none",
      },
    },
    boxSizing: "border-box",
    "@media(max-width: 768px)": {
      marginLeft: 0,
      alignSelf: "center",
      marginTop: 16,
    },
  }),
  quickActions: css({
    display: "flex",
    flexDirection: "column",
    padding: 24,
    height: 280,
    width: 548,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    "@media(max-width: 768px)": {
      backgroundColor: COLORS.light_gray,
      padding: 0,
      height: 160,
      width: 358,
    },
  }),
  quickText: css({
    fontSize: 20,
    fontFamily: FONTS.Inter_18_Regular,
    marginBottom: 26,
    "@media(max-width: 768px)": {
      display: "none",
    },
  }),
};