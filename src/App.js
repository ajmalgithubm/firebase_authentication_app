import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import './App.css'
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { userContext } from './UserContext';
function App() {
  const [userStatus, setUserStatus] = useState();
  const [initailUserState, setInitialUserState] = useState();
  const [userEmail, setUserEmail] =useState();
  useEffect(() => {
    console.log("useEffect is Calling...");
    onAuthStateChanged(auth,(user) => {
      console.log(Date())
      console.log("onAuthchanged Function is calling...");
      if (user) {
        // user is Signed In
        console.log('onAuth function is calling User exist...');
        setUserStatus(true);
        console.log(userStatus);
        setUserEmail(user.email);

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
    return(
      signOut(auth).then(() => {

      })
    )
  },[])
  useEffect(() => {
    console.log('userStaus is updated...')
    console.log(userStatus);
    console.log(Date())
  },[userStatus])

  return (
   
      <BrowserRouter>
        <div className="App">
        <NavBar userStatus={userStatus} />
          <Routes>
            <Route path='/welcome' element={<Welcome userEmail ={userEmail}/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route exact path='/' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    
    
  );
}

export default App;
