import React, { Component } from 'react';
import { connect } from "react-redux";
import { firebaseApp } from "../firebase";
import AddProperty from './AddProperty';
import PropertyList from './PropertyList';
import DeprecatedList from './DeprecatedList';

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }
    render (){
        return (
            <div>
                <h3>Propiedades</h3>
                <AddProperty />
                <hr/>
                <h4>Tareas pendientes</h4>
                <PropertyList />
                <hr/>
                <h4>Completadas</h4>
                <DeprecatedList />
                <hr/>
                <button className="btn btn-danger" onClick={()=>this.signOut()}>
                    Salir
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log('STATE: ', state);
    return {}
}

export default connect(mapStateToProps, null)(App);