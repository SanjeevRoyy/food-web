import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import '@mantine/dates/styles.css';

import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ToastContainer />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
