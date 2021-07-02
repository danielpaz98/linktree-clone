import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "~/assets/css/main.css";

const app = document.getElementById("app");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	app
);
