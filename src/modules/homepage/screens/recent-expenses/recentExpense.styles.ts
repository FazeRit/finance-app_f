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
    "@media(max-width: 1440px)": {
        display: "none",
    }
  }),
  title: css({
    fontSize: 20,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.dark_slate,
    marginBottom: 16,
  }),
  table: css({
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
};
