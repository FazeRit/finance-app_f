import { css } from "@emotion/react";
import { COLORS } from "../../../../shared/styles/colors";
import { FONTS } from "../../../../App.styles";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "row",
    height: 65,
    alignItems: "center",
    padding: 16,
    marginRight: 40,
    justifyContent: "space-between",
    marginLeft: 40,
  }),
  logo: css({
    fontSize: 24,
    fontFamily: FONTS.Inter_24_Regular,
  }),
  account: css({
    display: "flex",
    gap: 16,
    fontSize: 16,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  header: css({
    width: "100%",
    backgroundColor: COLORS.white,
  }),
};
