import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Sample01 from "./page/Sample01/Sample01";
import Sample02 from "./page/Sample02/Sample02";
import App from "./App";
import theme from "./styles/theme";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/sample01" element={<Sample01 />}></Route>
          <Route path="/sample02" element={<Sample02 />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
