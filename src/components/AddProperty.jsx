import React, {Component} from 'react';
import { connect } from 'react-redux';
import { propertyRef } from '../firebase';
class AddProperty extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    }

    AddProperty(){
        console.log('this', this);
        const { title } = this.state;
        const { email } = this.props.user;
        propertyRef.push({ email, title});
    }

    render(){
        return(
            <div>
                <h2>Agregar propiedad</h2>
                <div className="form-group"> 
                    <input className="form-control" type="text" 
                    placeholder="Agregar Propiedad" onChange={event =>this.setState({title: event.target.value})}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success form-control" type="button" 
                    onClick={ ()=> this.AddProperty()}> Registrate
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return{
        user
    }
}
export default connect(mapStateToProps, null)(AddProperty);