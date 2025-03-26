import { css } from "@emotion/react";
import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    height: 260,
    padding: 16,
    borderRadius: 12,
    "@media(max-width: 768px)": {
      marginTop: 16,
    },
  }),
  title: css({
    fontSize: 18,
    marginBottom: 8,
    fontFamily: FONTS.Inter_18_Regular,
    "@media(max-width: 768px)": {
      fontSize: 14,
    },
  }),
};
