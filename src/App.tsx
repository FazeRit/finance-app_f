/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router";
import Header from "./modules/homepage/header/header.component";
import { styles } from "./App.styles";
import SideNav from "./modules/homepage/side-nav/side-nav.component";

function App() {
  return (
    <>
      <div css={styles.container}>
        <Header />
        <main>
          <SideNav />
          <Outlet></Outlet>
        </main>
        <footer>123</footer>
      </div>
    </>
  );
}

export default App;
