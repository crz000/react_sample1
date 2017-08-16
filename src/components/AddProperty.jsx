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
            <div className="row">
                <h2>Tareas</h2>
                <div className="col-md-8">
                    <div className="form-group"> 
                        <input className="form-control" type="text" 
                        placeholder="Agregar Tarea" onChange={event =>this.setState({title: event.target.value})}/>
                    </div>
                </div>
                <div className="col-md-4">
                        <button className="btn btn-success form-control" type="button" 
                        onClick={ ()=> this.AddProperty()}> Crear
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