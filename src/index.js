import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";
import { NavermapsProvider } from "react-naver-maps";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </NavermapsProvider>
  </React.StrictMode>
);

reportWebVitals();
