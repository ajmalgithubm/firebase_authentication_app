import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import './App.css'
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { userContext } from './UserContext';
function App() {
  const [userStatus, setUserStatus] = useState();
  useEffect(() => {
    console.log("useEffect is Calling...");
    onAuthStateChanged(auth,(user) => {
      console.log("onAuthchanged Function is calling...");
      if (user) {
        // user is Signed In
        console.log('onAuth function is calling User exist...');
        setUserStatus(true);
        console.log(userStatus);

      } else {
        // user is Sign out
        console.log("onAuthFunction is calling user is Not exist");
        setUserStatus(false);
        console.log(userStatus);

      }

      console.log('end of the on Auth Function..')
      console.log(userStatus)
    })
    console.log("end of the useEffect function")
    console.log(userStatus);
    
  },[])
  useEffect(() => {
    console.log('userStaus is updated...')
    console.log(userStatus);
  },[userStatus])

  return (
   
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    
    
  );
}

export default App;
