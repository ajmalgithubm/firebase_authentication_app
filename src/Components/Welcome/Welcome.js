import React from 'react';
import './Welcome.css';
function Welcome({userEmail}) {
  return (
    <div>
        {
            userEmail&&
              <div className='welcome-container'>
                  <div className="welcome-head">
                      <h1>Welcome {userEmail}</h1>
                  </div>
                  <div className='success-login'>
                      <h3>You are successfully log in</h3>
                  </div>
              </div>
            
        }
    </div>
  )
}

export default Welcome
