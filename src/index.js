import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbOZtU0syg2_fvJUJ-RZSwd5tALMzWNJ0",
    authDomain: "taxinoibaihome-888.firebaseapp.com",
    databaseURL: "https://taxinoibaihome-888.firebaseio.com",
    projectId: "taxinoibaihome-888",
    storageBucket: "taxinoibaihome-888.appspot.com",
    messagingSenderId: "1013167667434"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
