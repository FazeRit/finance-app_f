/** @jsxImportSource @emotion/react */
import { Link } from "react-router";
import { styles } from "./header.styles";
import { PATHS } from "../../../shared/constants/path-options";
import { FaUserCircle } from "react-icons/fa";
import IconComponent from '../../../shared/components/icon/icon.component';

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <Link to={PATHS.home} css={styles.logo}>
          FinApp
        </Link>
        <div css={styles.account}>
          <Link to={PATHS.auth}>
            <IconComponent icon={FaUserCircle} size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
