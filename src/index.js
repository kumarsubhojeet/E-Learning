import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'; 
import './CSS/index.css'
import './CSS/Crousal.css'

import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


