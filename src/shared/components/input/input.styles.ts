import { css } from "@emotion/react";
import { FONTS } from "../../../App.styles";
import { COLORS } from "../../styles/colors";

export const styles = {
  container: css({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    marginBottom: 16,
  }),
  label: css({
    marginBottom: 10,
    fontSize: 14,
    fontFamily: FONTS.Inter_18_Regular,
  }),
  input: css({
    width: "100%",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    fontFamily: FONTS.Inter_18_Regular,
    border: `1px solid ${COLORS.light_gray}`,
    borderRadius: 8,
  }),
  error: css({
    color: COLORS.red,
    fontSize: 12,
    fontFamily: FONTS.Inter_18_Regular,
    marginTop: 8,
  })
};