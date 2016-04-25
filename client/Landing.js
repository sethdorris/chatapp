import React from 'react';
import {Link} from 'react-router';

const Landing = (props) => {
    return (
        <div className="container landing">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <input className="form-control" type="text" placeholder="Username" />
                    <Link to="/main">
                        <button className="btn btn-success" type="submit">Connect</button>
                    </Link>
                </div>  
            </div>
        </div>
        )
                    }

export default Landing;