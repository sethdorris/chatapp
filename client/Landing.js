﻿import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {setUsername, socketConnectInit, socketOnOpen} from './actions/index';
const PropTypes = React.PropTypes;


class Landing extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.connectButton = this.connectButton.bind(this);
    }

    connectButton() {
        const {dispatch} = this.props;
        let login = document.getElementById("usernameinput").value
        let webSocket = new WebSocket("ws://localhost:3000");
        
        dispatch(setUsername(login));
        dispatch(socketConnectInit(webSocket.url));
        webSocket.onopen = () => {
            console.log("websocket opened", webSocket);
            dispatch(socketOnOpen())
            this.context.router.push({
                pathname: '/Main'
            })
        };
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

export default connect(store=>store)(Landing);