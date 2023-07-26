import React, { useState } from 'react'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Firebase';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const createuser =async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
    }
    return (
        <div>
            <div className="form-container">
                <div className="sigup-head">
                    <h1>Create a account</h1>
                </div>
                <div className="email-input">
                    <input type="text" placeholder='Enter The Email Address' onChange={(e) => setEmail(e.target.value)}/>
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
