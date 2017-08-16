import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
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
    
    signUp(){
        console.log("STATE: ", this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            this.setState({error});
        });
    }

    render(){
        return (
            <div>
                <h2>Registro</h2>
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
                    onClick={ ()=> this.signUp()}> Registrate
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Ingresa</Link></div>
            </div>
        )
    }
}

export default SignUp;