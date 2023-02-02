import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import '../CssFiles/Otp.css'
import  '../CssFiles/signup.css'

function otpverify() {



    const name=useRef();
    const email= useRef();
    const password= useRef();

    const handleSubmit=()=>{
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        
    }

    return (
        <div className='signup_form'>
            <form onSubmit={handleSubmit}>
                <div className='login_container'>
                    <div className='sign_up'>
                    <img className='logo' src="https://www.transparentpng.com/thumb/heart/picture-heart-outline-png-30.png" alt="logo"/><span> <h2>Health Tracker</h2></span>
                    <h3>OTP Verification</h3>
                    <label>Enter the OTP sent to +91-9834357323</label>
                    <span>
                      <input id="user_detail" type="Email" name="email"  placeholder='6 digit OTP Number' />
                    </span> 
                    <div id="otp_details">
                    <span> <input type="checkbox" /></span>
                        
                        <p id='remember_password' >Remember me</p>
                        <p>Don't receive the OTP ? <b> RESEND OTP</b></p>
                       
                    </div>
                    <Link to="/createprofile"> <button type="button" className='submit' id="recaptcha"> Verify & Proceed</button></Link>
                    <div className='footer'>
                    <p>or <br/>
                    <span><img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="google" /></span> Sign Up with Google <br/>
                    </p>
                    </div>
                    </div>
                 </div>
               <div id='status_container'>
                    <div id='status' >
                    <img id="family_pic" src="https://img.freepik.com/free-vector/happy-young-family-with-baby-pediatrician-doctor_74855-7536.jpg" alt="gif" />
                    <div id='about_status'>
                    <h2>Carry medical data</h2> 
                    <p>We all want more information available when<br/> making health care decisions for ourselves<br/> and our families</p>
                    </div>
                 </div>
               </div>
              
         </form>
   
        </div>
    );
}

export default otpverify;