/** @jsxImportSource @emotion/react */

import { memo } from "react";
import { styles } from "./expense-header.styles";

export const ExpenseHeader = memo(
  () => (
    <thead css={styles.tableHeader}>
      <tr>
        <th>Date</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
  )
);
