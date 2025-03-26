import { styles } from "./noDataFound.styles";

const NoDataFound = () => {
  return (
    <div css={styles.container}>
      <h3 css={styles.heading}>No Data Found</h3>
      <p css={styles.text}>There is no data available to display at this time.</p>
    </div>
  );
};

export default NoDataFound;
