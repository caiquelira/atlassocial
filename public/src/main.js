import 'grommet/grommet-hpe.min.css'

import React from "react";
import ReactDOM from "react-dom";

import Home from './components/Home';


let element = document.getElementById('content');

ReactDOM.render(React.createElement(Home), element);

document.body.classList.remove('loading');