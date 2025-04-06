import { css } from "@emotion/react";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../../App.styles";

export const styles = {
  tableHeader: css({
    th: {
      fontSize: 14,
      fontFamily: FONTS.Inter_18_Bold,
      color: COLORS.black,
      textTransform: "uppercase",
      padding: "10px 16px",
      textAlign: "left",
      backgroundColor: COLORS.light_gray,
      borderBottom: `1px solid ${COLORS.light_gray}`,
    },
    "th:last-child": {
      textAlign: "right",
    },
  }),
};
