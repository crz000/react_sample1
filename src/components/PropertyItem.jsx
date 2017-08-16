import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deprecatedRef, propertyRef } from '../firebase';

class PropertyItem extends Component {

    deprecate(){
        const { email } = this.props.user;
        const { title, serverKey} = this.props.property;
        propertyRef.child(serverKey).remove();
        deprecatedRef.push({email, title});
    }

    render() {
        const { email, title} = this.props.property;
        return(
            <div>
                <strong>{title}</strong>
                <span> de <em>{email}</em></span>
                <button className="btn btn-primary btn-sm" onClick={()=>this.deprecate()}>
                    Deprecar
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;
    return { user }
}
export default connect(mapStateToProps, null)(PropertyItem);