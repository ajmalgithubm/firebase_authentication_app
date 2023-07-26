import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
const Login =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const loginUser = async (e) => {
        if(email.trim() === '' || password ===''){
            alert('Email And Password Doesnot Exist');
            window.location.reload();
        }
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            navigate('/welcome');
        }).catch(err => {
            alert(err.message);
        })
    }
  return (
    <div>
          <div className="form-container">
              <div className="sigup-head">
                  <h1>Login your account</h1>
              </div>
              <div className="email-input">
                  <input type="text" placeholder='Enter The Email Address' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password-input">
                  <input type="password" placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="signup-btn">
                  <button onClick={(e) => loginUser(e)}>Login</button>
              </div>
              <div className="no-account-link">
                <p onClick={() => navigate('/signup')}>Create new account</p>
              </div>

          </div>
    </div>
  )
}

export default Login
