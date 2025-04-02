import { ClipLoader } from "react-spinners";
import { COLORS } from "../../styles/colors";
import { FC } from "react";
import { styles } from './loading.styles';

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading: FC<LoadingProps> = ({ size, color }) => {
  return (
    <div css={styles.container}>
      <div css={styles.spinnerWrapper}>
        <ClipLoader
          color={color ?? COLORS.dark_slate}
          loading={true}
          size={size ?? 50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;
