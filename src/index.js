import React from "react";
import  ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import App from './componentes/App/App.js';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
