/** @jsxImportSource @emotion/react */
import { FaChartLine } from "react-icons/fa";
import { ClassNames } from "@emotion/react";
import { styles } from "./auth.styles";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SignUpForm from "./sing-up/sign-up.form.component";
import IconComponent from '../../../shared/components/icon/icon.component';
import LoginForm from "./login/login-form.component";

const Auth = () => {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <section className={cx(css(styles.container))}>
          <div className={cx(css(styles.formContainer))}>
            <IconComponent icon={FaChartLine} size={36} className={cx(css(styles.icon))} />
            <p className={cx(css(styles.title))}>Welcome to FinApp</p>
            <p className={cx(css(styles.subtitle))}>
              Manage your finances with confidence
            </p>
            <Tabs className={cx(css(styles.tabs))}>
              <TabList className={cx(css(styles.tabList))}>
                <Tab className={cx(css(styles.tabListItem))}>Sign Up</Tab>
                <Tab className={cx(css(styles.tabListItem))}>Login</Tab>
              </TabList>

              <TabPanel className={cx(css(styles.tabPanel))}>
                <SignUpForm />
              </TabPanel>
              <TabPanel className={cx(css(styles.tabPanel))}>
                <LoginForm />
              </TabPanel>
            </Tabs>
          </div>
        </section>
      )}
    </ClassNames>
  );
};

export default Auth;
