import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password: "",
            error: {
                message: ""
            }
        }
    }
    
    SignIn(){
        console.log("STATE: ", this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
            this.setState({error});
        });
    }

    render(){
        return (
            <div>
                <h2>Gestor de tareas</h2>
                <div className="form-group"> 
                    <input className="form-control" type="text" 
                    placeholder="email" onChange={event =>this.setState({email: event.target.value})}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" 
                    placeholder="password" onChange={event =>this.setState({password: event.target.value})}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary form-control" type="button" 
                    onClick={ ()=> this.SignIn()}> Ingresa 
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Registrate</Link></div>
            </div>
        )
    }
}

export default SignIn;