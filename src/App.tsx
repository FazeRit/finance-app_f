/** @jsxImportSource @emotion/react */
import Header from "./modules/homepage/screens/header/header.component";
import { styles } from "./App.styles";
import SideNav from "./modules/homepage/screens/side-nav/side-nav.component";
import { Outlet } from "react-router";

function App() {
  return (
    <div css={styles.container}>
      <Header />
      <main css={styles.main}>
        <SideNav />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
