import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Sidenavbar/Navbar';
import DashBoard from'./Sidenavbar/Dashboard/DashBoard';
import BasicInfo from'./Sidenavbar/Dashboard/BasicInfo';
import AddmedicalHistory from'./Sidenavbar/Dashboard/AddmedicalHistory';
// import Navbar from './Sidenavbar/Navbar'
// import { Route,Routes } from 'react-router-dom';
// import SignUp from './Components/SignUp';
// import SignIn from './Components/SignIn';
// import CreateProfile from './Components/CreateProfile';
// import OtpVerify from './Components/OtpVerify';

// import RateUs from './Components/RateUs';
// import ThankYou from './Components/ThankYou';

function App() {
  return (
      //  <Routes> 
      //     <Route path="/" element={<SignUp/>}/>
      //     <Route path='/createprofile' element={<CreateProfile/>}/>
      //     <Route path='/signin' element={<SignIn/>}/>
      //     <Route path='/otpverify' element={<OtpVerify/>}/>
      //     <Route path="/rateus" element={<RateUs/>}></Route>
      //     <Route path='/thankyou' element={<ThankYou/>}/>
      //  </Routes>
      <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/basicinfo' element={<BasicInfo/>}/>
        <Route path='/addmedicalhistory' element={<AddmedicalHistory/>}/>

      </Routes>
     
      </div>
        
  );
}

export default App;
