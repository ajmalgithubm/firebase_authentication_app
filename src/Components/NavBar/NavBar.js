import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <div className="nav-bar">
                <div className="nav-head">
                    <p>React App</p>
                </div>
                <div className="nav-login">
                    <a href="" style={{textDecoration:'none', color:'white'}}>Login</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
