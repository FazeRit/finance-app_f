import { css } from "@emotion/react";
import { COLORS } from "./shared/styles/colors";

export const styles = {
  container: css({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    gap: 4,
    width: "100vw",
    backgroundColor: COLORS.light_gray,
  }),
  main: css({
    display: "flex",
    height: "100vh",
    gap: 32,
    width: "100vw",
  }),
  global: css({
    "*": {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
      boxSizing: "border-box",
    },
    "html, body": {
      height: "100%",
      backgroundColor: COLORS.light_gray,
      width: "100%",
    },
    "ol, ul": {
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
    table: {
      borderCollapse: "collapse",
      borderSpacing: 0,
    },
  }),
  fonts: css({
    "@font-face": [
      {
        fontFamily: "Inter_18_Bold",
        src: `url(/fonts/Inter_18pt-Bold.ttf) format("truetype")`,
      },
      {
        fontFamily: "Inter_18_Regular",
        src: `url(/fonts/Inter_18pt-Regular.ttf) format("truetype")`,
      },
      {
        fontFamily: "Inter_24_Regular",
        src: `url(/fonts/Inter_24pt-Regular.ttf) format("truetype")`,
      },
      {
        fontFamily: "Inter_28_Regular",
        src: `url(/fonts/Inter_28pt-Regular.ttf) format("truetype")`,
      },
    ],
  }),
};

export const FONTS = {
  Inter_18_Bold: "Inter_18_Bold",
  Inter_18_Regular: "Inter_18_Regular",
  Inter_24_Regular: "Inter_24_Regular",
  Inter_28_Regular: "Inter_28_Regular",
} as const;
