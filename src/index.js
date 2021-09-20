import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import Main from "./loginf/main"

ReactDOM.render(
  <BrowserRouter>
     <Main></Main>
  </BrowserRouter>,
  document.getElementById('root')
);

