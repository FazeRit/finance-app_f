import { css } from "@emotion/react";
import { COLORS } from "../../../../shared/styles/colors";
import { FONTS } from "../../../../App.styles";

export const styles = {
  cardContainer: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "auto",
    gap: 16,
    "@media(max-width: 768px)": {
      width: 358,
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