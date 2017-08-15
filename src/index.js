import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/App.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user) {
        console.log('Usuario Reconocido', user);
    }else{
        console.log("Sin Usuario");
    }
});

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </Router>,
    document.getElementById('root')
)
