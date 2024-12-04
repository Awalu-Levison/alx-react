import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById("root-notifications"));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// measure web performance using reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();