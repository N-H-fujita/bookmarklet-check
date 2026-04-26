import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { runChecks } from "./checks/runChecks";
import "./styles/bookmarklet.css";

const ROOT_ID = "__bookmark_checker_root__";

const existing = document.getElementById(ROOT_ID);

if (existing) {
  existing.remove();
} else {
  const rootEl = document.createElement("div");
  rootEl.id = ROOT_ID;
  document.body.appendChild(rootEl);

  const root = createRoot(rootEl);
  const results = runChecks();

  const handleClose = () => {
    root.unmount();   // Reactの破棄
    rootEl.remove();  // DOM削除
  };

  root.render(<App onClose={handleClose} results={results}  />);
}