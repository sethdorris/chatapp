import React from 'react';
class Content extends React.Component {
    render() {
        return (
                <div className="col-md-8 col-xs-8 text-center content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 chatwindow">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-xs-10">
                            <input type="text" className="form-control" id="message" />
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <button type="submit" className="btn btn-default btn-success" onClick={props.send}>Send</button>
                        </div>
                    </div>
                </div>
            )
    }
}
export default Content;