import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import { router } from "./Routes/Routes";  // Import the router config
import App from "./App";  // Main app component


const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Wrap with RouterProvider */}
  </React.StrictMode>
);
