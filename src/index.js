import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProfile from "./UserProfile";
import Chips from "./Chips";
import OnOffButton from "./OnOffButton";
import TabsComponent from "./TabsComponent";
import CardCoursels from "./CardCoursels";
import Login from "./Login";
import Body from "./components/Body";
import NestedArray from "./NestedArray";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
