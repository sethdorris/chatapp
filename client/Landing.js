import React from 'react';
import {Link} from 'react-router';

const Landing = (props) => {
    return (
        <div className="container landing">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-offset-4">
                    <label htmlFor="username">Username: </label>
                    <input className="form-control" type="text" placeholder="Username" />
                    <Link to="/main">
                        <button className="btn btn-success text-center" type="submit">Connect</button>
                    </Link>
                </div>  
            </div>
        </div>
        )
}

export default Landing;