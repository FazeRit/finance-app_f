import { css } from "@emotion/react";
import { COLORS } from "../../../shared/styles/colors";
import { FONTS } from "../../../App.styles";

export const styles = {
  container: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: COLORS.light_gray,
    "@media (max-width: 768px)": {
      backgroundColor: COLORS.white,
      paddingRight: 16,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingLeft: 16,
    },
  }),
  formContainer: css({
    display: "flex",
    width: 448,
    height: 782,
    flexDirection: "column",
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: COLORS.white,
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    "@media (max-width: 768px)": {
     boxShadow: 'none',
    },
  }),
  icon: css({
    marginTop: 32,
  }),
  title: css({
    marginTop: 25,
    fontSize: 24,
    fontFamily: FONTS.Inter_24_Regular,
  }),
  subtitle: css({
    marginTop: 8,
    fontSize: 16,
    color: COLORS.medium_gray,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  tabs: css({
    marginTop: 32,
    width: 384,
    position: "relative",
  }),
  tabList: css({
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    position: "relative",
  }),
  tabListItem: css({
    fontSize: 16,
    width: 188,
    height: 42,
    fontFamily: FONTS.Inter_18_Regular,
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    color: COLORS.medium_gray,
    margin: "0 4px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&.react-tabs__tab--selected": {
      borderBottom: `2px solid ${COLORS.medium_gray}`,
    },
    "&:hover": {
      borderBottom: `2px solid ${COLORS.medium_gray}`,
    },
    "&:focus, &:focus-visible": {
      outline: "none",
    },
  }),
  tabPanel: css({
    display: "flex",
    width: 384,
  }),
};
