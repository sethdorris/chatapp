import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {setUsername} from './actions/index';

class Landing extends React.Component {
    constructor(props) {
        super();

        this.connectButton = this.connectButton.bind(this);
    }

    connectButton() {
        const {dispatch} = this.props;
        console.log("Get State", store.getState());
        let login = document.getElementById("usernameinput").value
        console.log("Store", dispatch(setUsername(login)));
        
    }

    render() {
        return (
            <div className="container landing">
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-offset-4">
                        <label htmlFor="username">Username: </label>
                        <input className="form-control" type="text" id="usernameinput" placeholder="Username" />
                        <button className="btn btn-success text-center" type="submit" onClick={this.connectButton}>Connect</button>
                    </div>  
                </div>
            </div>
            )
    }

}

export default connect()(Landing);