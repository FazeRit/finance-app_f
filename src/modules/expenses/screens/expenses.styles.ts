import { css } from "@emotion/react";
export const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    margin: "0 auto",
    gap: 16,
    "@media(max-width: 768px)": {
      margin: 0,
      height: "100vh",
    },
  }),
  sectionTop: css({
    display: "flex",
    flexDirection: "row",
    width: 1154,
    gap: 16,
    "@media(max-width: 1440px)": {
      alignItems: "center",
    },
    "@media(max-width: 768px)": {
      width: "auto",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
};
