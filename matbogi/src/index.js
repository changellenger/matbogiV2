import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RenderAfterNavermapsLoaded} from "react-naver-maps";

//firebase
import { getFirebaseConfig } from './Firebase_config.js';
import { initializeApp } from 'firebase/app';
import {onAuthStateChanged , getAuth} from 'firebase/auth'

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
onAuthStateChanged(getAuth(), authStateObserver);

ReactDOM.render(
  <React.StrictMode>
     <RenderAfterNavermapsLoaded ncpClientId={"in24ctqv7q"}>
    <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
