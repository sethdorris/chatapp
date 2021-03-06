﻿import React from 'react';

const Menu = (props) => {
    return (
        <div className="col-md-4 col-xs-4 text-center menu">
            <div>
                <h3>Online Users</h3>
                <ul>
                    {props.users.map((user) => {
                        return <li>{user}</li>
                    })}
                </ul>
            </div>
            <div>
                <h3>Channels</h3>
            </div>
        </div>
        )
    }

export default Menu;