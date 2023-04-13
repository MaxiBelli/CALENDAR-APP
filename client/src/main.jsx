import React from "react";
import { createRoot } from "react-dom/client"; // Importar desde "react-dom/client"
import { CalendarApp } from "./CalendarApp";
import "./index.css";

// Utilizar createRoot en lugar de ReactDOM.render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Usar createRoot de "react-dom/client"
root.render(<CalendarApp />);
