import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deprecatedRef } from '../firebase';
import { setDeprecated } from '../actions';

class DeprecatedList extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ""
        }
    }

    cleanDeprecated(){
        deprecatedRef.set([]);
    }

    componentDidMount(){
        deprecatedRef.on('value', snap => {
            let deprecated = [];
            snap.forEach(prop => {
                const { email, title} = prop.val();
                const serverKey = prop.key;
                // console.log('propObject', propObject);
                deprecated.push({ email, title, serverKey} );
            })
            console.log('deprecated', deprecated);
            this.props.setDeprecated(deprecated);
        })
    }

    render(){
        return(
            <div className="row">
                {
                    this.props.deprecated.map((dep, index)=>{
                        const { title, email} = dep;
                        return(
                            <div key={index} className="col-md-8">
                                <strong>{title}</strong> completada por <em>{email}</em>
                            </div>
                        )
                    })
                }
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={() => this.cleanDeprecated()}>
                        Clean
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { deprecated } = state;
    return { deprecated };
}

export default connect(mapStateToProps, { setDeprecated})(DeprecatedList);