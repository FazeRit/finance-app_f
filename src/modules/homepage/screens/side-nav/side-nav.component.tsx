/** @jsxImportSource @emotion/react */
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router";
import { PATHS } from "../../../../shared/constants/path-options";
import { FaHome, FaTable } from "react-icons/fa";
import { styles } from "./side-nav.styles";
import IconComponent from "../../../../shared/components/icon/icon.component";

const SideNav = () => {
  const location = useLocation();

  return (
    <Sidebar css={styles.container} width="280px">
      <Menu css={styles.menuContainer}>
        <MenuItem
          component={<Link to={PATHS.home} />}
          className={location.pathname === PATHS.home ? "active" : ""}
          css={[styles.text, location.pathname === PATHS.home && styles.active]}
          icon={<IconComponent icon={FaHome} size={16} />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          component={<Link to={PATHS.expenses.root} />}
          className={location.pathname === PATHS.expenses.root ? "active" : ""}
          css={[
            styles.text,
            location.pathname === PATHS.expenses.root && styles.active,
          ]}
          icon={<IconComponent icon={FaTable} size={16} />}
        >
          Expenses
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
