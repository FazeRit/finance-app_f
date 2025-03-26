import { css } from "@emotion/react";
import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  container: css({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginTop: 32,
  }),
  continueText: css({
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.medium_gray,
    textAlign: "center",
    marginTop: 22,
    paddingBottom: 10,
  }),
  footerText: css({
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
    color: COLORS.medium_gray,
    textAlign: "center",
    marginTop: 120,
    "@media (max-width: 768px)": {
      marginTop: 32,
    },
  }),
};
