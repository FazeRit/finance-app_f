import { css } from "@emotion/react";
import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    height: 280,
    width: 366,
    padding: 24,
    marginTop: 0,
    borderRadius: 12,
  }),
  title: css({
    fontSize: 18,
    marginBottom: 26,
    fontFamily: FONTS.Inter_18_Regular,
    "@media(max-width: 768px)": {
      fontSize: 14,
      marginBottom: 8,
    },
  }),
};
