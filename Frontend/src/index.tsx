import { ColorModeScript, createStandaloneToast } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "app/pages";

const { ToastContainer } = createStandaloneToast();

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ToastContainer />
    <App />
  </React.StrictMode>
);
