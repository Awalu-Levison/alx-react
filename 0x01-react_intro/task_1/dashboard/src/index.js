import React from 'react';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

    <React.StrictMode>
        <App />
        <div className="root-notifications">
            <Notifications />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// reportWebVitals(console.log)) is an example of a function
// that can be used to measure performance of a react App
// Find more here: https://bit.ly/CRA-vitals
reportWebVitals();