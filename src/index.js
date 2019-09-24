// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

import './style/bootstrap.min.css';
import './style/buttons.css';
import './style/calendar.css';
import './style/styles.css';


render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
