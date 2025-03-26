import { ClipLoader } from "react-spinners";
import { COLORS } from "../../styles/colors";
import { FC } from "react";

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading: FC<LoadingProps> = ({ size, color }) => {
  return (
    <ClipLoader color={color ?? COLORS.dark_slate} loading={true} size={size ?? 50} />
  );
};

export default Loading;
