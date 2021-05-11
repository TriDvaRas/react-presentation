import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.sass';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Shrek from './Shrek.gif'

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/'>
      <Switch>
        <Route path="/Shrek"><img src={Shrek} /></Route>
        <Route path="/*">
          <div class='w-100 h-100 bg-dark text-light '>
            <App />
          </div>
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
