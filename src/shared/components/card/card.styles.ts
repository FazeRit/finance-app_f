import { css } from "@emotion/react";
import { COLORS } from "../../styles/colors";

export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 242,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    height: 82,
    "@media(max-width: 768px)": {
      flexDirection: "column",
      width: 171,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 16,
    },
  }),
  icon: css({}),
  text: css({}),
};