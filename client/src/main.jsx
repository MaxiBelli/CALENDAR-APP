import React from "react";
import { createRoot } from "react-dom/client"; 
import { CalendarApp } from "./CalendarApp";
import './styles.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement); 
root.render(<CalendarApp />);
