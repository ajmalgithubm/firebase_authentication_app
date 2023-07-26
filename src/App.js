import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import './App.css'
import Login from './Components/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
