import { css } from "@emotion/react";
import { FONTS } from "../../../../App.styles";
import { COLORS } from "../../../../shared/styles/colors";

export const styles = {
  container: css({
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "column",
    minWidth: 358,
    maxHeight: 434,
    padding: 16,
    borderRadius: 12,
  }),
  title: css({
    fontSize: "24px",
    fontFamily: FONTS.Inter_24_Regular,
    color: COLORS.dark_slate,
    textAlign: "center" as const,
  }),
};
