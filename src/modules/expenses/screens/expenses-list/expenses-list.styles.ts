import { css } from "@emotion/react";
import { COLORS } from "../../../../shared/styles/colors";
import { FONTS } from "../../../../App.styles";

export const styles = {
  container: css({
    width: "100%",
    height: "auto",
    padding: 24,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  }),
  title: css({
    fontSize: 20,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.dark_slate,
    marginBottom: 16,
  }),
  table: css({
    marginTop: 8,
    width: "100%",
    borderCollapse: "collapse",
  }),
  tableHeader: css({
    th: {
      fontSize: 14,
      fontFamily: FONTS.Inter_18_Bold,
      color: COLORS.black,
      textTransform: "uppercase",
      padding: "10px 16px",
      textAlign: "left",
      backgroundColor: COLORS.light_gray,
      borderBottom: `1px solid ${COLORS.light_gray}`,
    },
    "th:last-child": {
      textAlign: "right",
    },
  }),
  tableRow: css({
    td: {
      fontSize: 14,
      fontFamily: FONTS.Inter_18_Regular,
      color: COLORS.dark_slate,
      padding: "12px 16px",
      borderBottom: `1px solid ${COLORS.light_gray}`,
    },
    "&:last-child td": {
      borderBottom: "none",
    },
  }),
  categoryBadge: css({
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: 12,
    backgroundColor: COLORS.light_gray,
    color: COLORS.dark_slate,
    fontSize: 12,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  amount: css({
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.red,
    textAlign: "right",
  }),
  paginationContainer: css({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    borderTop: `1px solid ${COLORS.light_gray}`,
  }),
  paginationButton: css({
    padding: "8px 16px",
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.dark_slate,
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.light_gray}`,
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: COLORS.light_gray,
    },
    "&:disabled": {
      color: COLORS.medium_gray,
      cursor: "not-allowed",
      backgroundColor: COLORS.white,
    },
  }),
  label: css({
    fontSize: 18,
    fontFamily: FONTS.Inter_18_Bold,
  }),
  paginationText: css({
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.dark_slate,
  }),
  paginationSelect: css({
    padding: "6px 12px",
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.dark_slate,
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.light_gray}`,
    borderRadius: 4,
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      borderColor: COLORS.dark_slate,
    },
  }),
};
