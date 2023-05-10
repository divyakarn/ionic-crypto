import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import {Provider} from 'react-redux';
import axios from 'axios';
import CryptoContext from './config/Currency';

axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins/"
axios.interceptors.request.use(req=>{
  return req;
},err=>{
  return Promise.reject(err);
});

axios.interceptors.response.use(res=>{
  return res.data;
},err=>{
  return Promise.reject(err);
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
     <CryptoContext>
     <App />
     </CryptoContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
