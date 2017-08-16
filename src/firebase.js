import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwWxIALFVw2bWDL87uEgNMZQSENc3yrlA",
    authDomain: "sample1-cdbd9.firebaseapp.com",
    databaseURL: "https://sample1-cdbd9.firebaseio.com",
    projectId: "sample1-cdbd9",
    storageBucket: "",
    messagingSenderId: "431407713583"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const propertyRef = firebase.database().ref('properties');
  export const deprecatedRef = firebase.database().ref('deprecated');