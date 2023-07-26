import React, { useState } from 'react'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Firebase';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const createuser =async (e) => {
        e.preventDefault();
        if(email.trim() === '' || password.length < 7){
            alert("Enter The Valid email and Password")
            window.location.reload();
        }
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

            navigate('/welcome')

        }).catch(error => {
            alert(error)
        })
    }
    return (
        <div>
            <div className="form-container">
                <div className="sigup-head">
                    <h1>Create a account</h1>
                </div>
                <div className="email-input">
                    <input type="text" placeholder='Enter the email address' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password-input">
                    <input type="password" placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="signup-btn">
                    <button onClick={(e) => createuser(e)}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
