import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./modules/homepage/homepage.component";
import { PATHS } from "./shared/constants/path-options";
import Auth from "./modules/auth/screens/auth.component";
import { Global } from "@emotion/react";
import { styles } from "./App.styles"; 
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Expenses from "./modules/expenses/screens/expenses.component";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Global styles={styles.global} />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.auth} element={<Auth />} />
          <Route path={PATHS.home} element={<App />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.expenses.root} element={<Expenses />}>
              <Route path={PATHS.expenses.listById} />
              <Route path={PATHS.expenses.uploadBankStatement} />
            </Route>
            <Route path={PATHS.categories.root}>
              <Route path={PATHS.categories.listById} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
