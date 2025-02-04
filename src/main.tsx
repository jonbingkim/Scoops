import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import { Suggestion } from "./client_components/suggestions.tsx";
import FAQs from "./client_components/faq.tsx";
import "../app/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
			<Route path="/suggestions" element={<Suggestion/>}/>
			<Route path='FAQs' element={<FAQs/>}/>
    </Routes>
  </BrowserRouter>
	</React.StrictMode>
);
