import { BrowserRouter, Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <NavBar/>
       <SignUp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
