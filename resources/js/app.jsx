import './bootstrap';
import React from "react";
import { createRoot } from "react-dom/client";
import NewsList from "./components/new_list.jsx";

const el = document.getElementById("react-news");
if (el) {
    createRoot(el).render(<NewsList />);
}
