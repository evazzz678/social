import './App.css'
import Authen from './authentication/Authen'
import SignUp from './authentication/SignUp'
import Home from './home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './profile/Profile';




function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          
          <Routes>

            <Route path="/" element={ <Authen/>} />
            <Route path="/signup" element={ <SignUp/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />

            
            
          </Routes>
          </BrowserRouter>

       
        

        
        
        
      </div>
     
    </>
  )
}

export default App
