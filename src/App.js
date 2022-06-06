import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth)
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          
          <Route path="" element={<Home/>}/>  
          
           <Route path="/login" element={<Login/>}/>  
        </Routes>
        
    
    </div>
  );
}

export default App;
