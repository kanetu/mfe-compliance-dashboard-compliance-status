import React from "react";
import { createRoot } from "react-dom/client";
import ComplianceStatus from "./ComplianceStatus";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ComplianceStatus />
  </React.StrictMode>
);
