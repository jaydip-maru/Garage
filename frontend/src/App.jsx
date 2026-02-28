
import Home from './components/AddminPannel/Home';
import New from './components/AddminPannel/New';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Show from './components/AddminPannel/Show';
import DashBoard from './components/DashBoard/DashBoard';
import Services from './components/Services/Services';
import ContectMain from './components/Contect/ContectMain';
import AboutMe from './components/AboutMe/AboutMe';
import UserAppReq from './components/Services/UserAppReq';
import MyProfile from './components/auth/MyProfile';
// import { useAuth } from "../../Providers/AuthContext";






function App() {
  
 

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/home" element={<Home />} />
      
        <Route  path="/new" element={<New />} />
        <Route  path="/service" element={<Services />} />
        <Route  path="/contect" element={<ContectMain />} />
        <Route  path="/aboutme" element={<AboutMe />} />



        <Route  path="/signup" element={<SignUp />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/home/garage/:id" element={<Show />} />
        <Route  path="/bookNow" element={<UserAppReq />} />
        <Route  path="/myProfile" element={<MyProfile />} />



        

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
