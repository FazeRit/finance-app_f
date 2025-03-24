/** @jsxImportSource @emotion/react */
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router";
import { PATHS } from "../../../shared/constants/path-options";
import { FaHome, FaTable, FaLandmark } from "react-icons/fa";
import { styles } from "./side-nav.styles";
import IconComponent from "../../../shared/components/icon/icon.component";

const SideNav = () => {
  const location = useLocation();

  return (
    <Sidebar css={styles.container} width="300px">
      <Menu css={styles.menuContainer}>
        <MenuItem
          component={<Link to={PATHS.home} />}
          className={location.pathname === PATHS.home ? "active" : ""}
          css={[styles.text, location.pathname === PATHS.home && styles.active]}
          icon={<IconComponent icon={FaHome} size={24} />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          component={<Link to={PATHS.expenses.list} />}
          className={location.pathname === PATHS.expenses.list ? "active" : ""}
          css={[
            styles.text,
            location.pathname === PATHS.expenses.list && styles.active,
          ]}
          icon={<IconComponent icon={FaTable} size={24} />}
        >
          Expenses
        </MenuItem>
        <MenuItem
          component={<Link to={PATHS.expenses.uploadBankStatement} />}
          className={
            location.pathname === PATHS.expenses.uploadBankStatement
              ? "active"
              : ""
          }
          css={[
            styles.text,
            location.pathname === PATHS.expenses.uploadBankStatement &&
              styles.active,
          ]}
          icon={<IconComponent icon={FaLandmark} size={24} />}
        >
          Bank Statements
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
