import React, {Component} from 'react';
import { connect } from 'react-redux';
import { propertyRef } from '../firebase';
import { setProperties } from '../actions';
import PropertyItem from './PropertyItem';

class PropertyList extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    }

    componentDidMount(){
        propertyRef.on('value', snap => {
            let properties = [];
            snap.forEach(prop => {
                const { email, title} = prop.val();
                let propObject = prop.val();
                const serverKey = prop.key;
                // console.log('propObject', propObject);
                properties.push({ email, title, serverKey} );
            })
            console.log('properties', properties);
            this.props.setProperties(properties);
        })
    }

    render(){
        console.log('this.props.properties', this.props.properties);
        return(
            <div>
                {
                    this.props.properties.map((prop, index)=>{
                        return(
                            <PropertyItem key={index} property={prop}/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { properties } = state;
    return { properties };
}

export default connect(mapStateToProps, {setProperties}) (PropertyList);