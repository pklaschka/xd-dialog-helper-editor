import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import loadIcons from './assets/icons/loadIcons';
import icons from './assets/icons/spectrum-css-icons-medium.svg';


loadIcons(icons, (error, svg) => {
    document.body.appendChild(svg);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
