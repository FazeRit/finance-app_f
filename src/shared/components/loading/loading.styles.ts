import { css } from "@emotion/react";
import { COLORS } from "../../styles/colors";

export const styles = {
  container: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    position: "relative",
  }),
    spinnerWrapper: css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",

    "&:after": {
        content: '"Loading..."',
        fontSize: "16px",
        color: COLORS.dark_slate,
        fontFamily: "Arial, sans-serif",
        fontWeight: 500,
        animation: "fadeIn 0.5s ease-in",
    },

    "@keyframes fadeIn": {
        from: {
        opacity: 0,
        },
        to: {
        opacity: 1,
        },
    },
    }),
};
