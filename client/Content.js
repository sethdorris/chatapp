import React from 'react';
class Content extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
                <div className="col-md-8 col-xs-8 text-center content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 chatwindow">
                        </div>
                    </div>
                    <div className="row chatcontrols">
                        <div className="col-md-12 col-xs-12">
                            <input type="text" className="form-control" id="message" />                    
                            <button type="submit" className="btn btn-default btn-success" onClick={this.props.send}>Send</button>
                        </div>
                    </div>
                </div>
            )
    }
}
export default Content;