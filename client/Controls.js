import React from 'react';

const Controls = (props) => {
    return (
        <div className="row chatcontrols">
            <div className="col-md-12 col-xs-12">
                <input type="text" className="form-control" id="message" />                    
                <button type="submit" className="btn btn-default btn-success" onClick={props.send}>Send</button>
            </div>
        </div>
        )
}

export default Controls;