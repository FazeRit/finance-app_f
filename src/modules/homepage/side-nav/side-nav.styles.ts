import { css } from "@emotion/react";
import { FONTS } from "../../../App.styles";
import { COLORS } from "../../../shared/styles/colors";

export const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  menuContainer: {
    width: 300,
    gap: 16,
    padding: 16,
  },
  text: css({
    borderRadius: 8,
    width: "100%",
    marginTop: 8,
    marginRight: 12,
    fontSize: 16,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  active: css({
    backgroundColor: COLORS.light_gray,
  }),
};
