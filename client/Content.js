import React from 'react';
import Controls from './Controls';
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
                    <Controls send={this.props.send} />
                </div>
            )
    }
}
export default Content;