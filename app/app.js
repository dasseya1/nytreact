// Include the Main React Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';

// Include the Routes
import routes from './config/routes';

// This code here allows us to render an entire block of Bootstrap layout HTML using
// our Main Component
render(routes, document.getElementById("app"));