/** @jsxImportSource @emotion/react */
import { Link } from "react-router";
import { styles } from "./header.styles";
import { PATHS } from "../../../../shared/constants/path-options";
import { FaUserCircle } from "react-icons/fa";
import IconComponent from "../../../../shared/components/icon/icon.component";
import { useAuthStore } from "../../../auth/store/auth.store";

const Header = () => {
  const isAuth = useAuthStore.getState().isAuth;

  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <Link to={PATHS.home} css={styles.logo}>
          FinApp
        </Link>
        <div css={styles.account}>
          {isAuth ? (
            <IconComponent icon={FaUserCircle} size={24} />
          ) : (
            <Link to={PATHS.auth}>
              <p>Auth</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
