import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="row chatcontrols">
                <div className="col-md-12 col-xs-12">
                    <input type="text" className="form-control" id="message" />                    
                    <button type="submit" className="btn btn-default btn-success" onClick={this.props.send}>Send</button>
                </div>
            </div>
            )
    }
}

export default Controls;