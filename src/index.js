import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import MenuRutas from './components/MenuRutas';
import  Router  from './components/Router';
import CreateHospital from './components/CreayeHospital';
import Hospitales from './components/Hospitales';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
