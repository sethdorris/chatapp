import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import ws from './WebSocket';
import {setUsername, socketConnectInit, socketOnOpen} from './actions/index';


class Landing extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.connectButton = this.connectButton.bind(this);
    }

    connectButton() {
        const {dispatch} = this.props;
        let login = document.getElementById("usernameinput").value
        let promise = new Promise((resolve, reject) => {
            let connected = ws.connect();
            resolve(connected);
        });
        promise.then((data) => {
            console.log("Connected:", data);
            dispatch(socketOnOpen());
            dispatch(setUsername(login));
            this.context.router.push({
                pathname: '/main'
            })
        });
    }

    render() {
        return (
            <div className="container landing">
                <div className="row">
                    <div className="col-sm-offset-4 col-md-offset-4 col-sm-4 col-md-4 text-center">
                        <h2 className="signinHeader">SIGN IN</h2>
                        <input className="form-control" type="text" id="usernameinput" placeholder="Username" />
                        <button className="btn btn-success text-center" id="connectBtn" type="submit" onClick={this.connectButton}>Connect</button>
                    </div>  
                </div>
            </div>
            )
    }

}

Landing.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect()(Landing);