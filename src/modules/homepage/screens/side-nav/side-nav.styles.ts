import { css } from "@emotion/react";
import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  container: {
    display: "flex",
    height: "100vh",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  menuContainer: {
    width: 280,
    gap: 16,
    padding: 16,
  },
  text: css({
    borderRadius: 8,
    width: "100%",
    marginTop: 8,
    marginRight: 12,
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  active: css({
    backgroundColor: COLORS.light_gray,
  }),
};
