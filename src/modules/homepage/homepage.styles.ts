import { css } from "@emotion/react";

export const styles = {
  container: css({
    display: "flex",
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    "@media(max-width: 768px)": {
      marginLeft: "auto",
      marginRight: "auto",
      flexDirection: "column",
    },
  }),
  cardContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: 16,
    "@media(max-width: 768px)": {
      flexDirection: "row",
    },
  })
};