import React, { useContext, useState } from 'react';
import './NavBar.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../UserContext';
const NavBar = () => {
    const navigate = useNavigate();
    const logoutButton = (e) => {
        e.preventDefault();
        signOut(auth).then((user) => {
            navigate('/');
        })
    }
    return (
        <div>
            <div className="nav-bar">
                <div className="nav-head">
                    <p>React App</p>
                </div>
                <div className="nav-login">
                    <a href="" onClick={(e) => logoutButton(e)} style={{ textDecoration: 'none', color: 'white' }}>LogOut</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar
