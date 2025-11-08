import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import BackgroundAudio from "./components/BackgroundAudio.jsx";
import { ApiProvider } from "./context/ApiContext.jsx"; // ✅ Import your provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <BackgroundAudio />
        <App />
      </ApiProvider>
    </BrowserRouter>
  </StrictMode>
);
