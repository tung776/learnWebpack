const css = require('./app.scss');

var myname = "nguyen thanh tung";
console.log("xin chao ban: " + myname);

import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <h1> hello: Nguyen thanh tung </h1>,
    document.getElementById("root"));
