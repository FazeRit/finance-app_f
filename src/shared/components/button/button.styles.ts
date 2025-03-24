/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "./../../../App.styles";

export const styles = {
  button: (bgColor: string = COLORS.dark_slate): SerializedStyles =>
    css({
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 16,
      marginTop: 12,
      fontFamily: FONTS.Inter_18_Regular,
      color: bgColor === COLORS.dark_slate ? COLORS.white : COLORS.dark_slate,
      padding: "14px 16px",
      borderRadius: 8,
      backgroundColor: bgColor,
      border: `1px solid ${COLORS.dark_slate}`,
      cursor: "pointer",
      display: "flex",
      gap: 8,
      "&:hover": {
        opacity: 0.9,
        ...(bgColor === COLORS.white && {
          backgroundColor: COLORS.dark_slate,
          color: COLORS.white,
          "> span": {
            color: COLORS.white,
          },
        }),
      },
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    }),
  icon: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    color: COLORS.dark_slate,
  }),
};
