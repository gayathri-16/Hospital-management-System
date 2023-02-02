import React, { useEffect } from 'react';
import { useState } from 'react';

import '../CssFiles/create_profile.css'
import { Link} from "react-router-dom";
function CreateProfile() {


 const countries=[
    {id:"1", name:"India"},
    {id:"2", name:"USA"},
    {id:"3", name:"England"}
 ]
 const states=[
    {id:"1",countryId:"1",name:"TamilNadu"},
    {id:"2",countryId:"1",name:"Andhra Pradhesh"},
    {id:"3",countryId:"1",name:"Delhi"},
    {id:"4",countryId:"1",name:"Kerala"},
    {id:"5",countryId:"2",name:"California"},
    {id:"6",countryId:"2",name:"Texas"},
    {id:"7",countryId:"3",name:"BedFord"},
    {id:"8",countryId:"3",name:"Cambridge"},

 ]
 const cities=[
    {id:"1",stateId:"1",name:"Chennai"},
    {id:"2",stateId:"1",name:"Madhurai"},
    {id:"3",stateId:"2",name:"Hydrabad"},
    {id:"4",stateId:"2",name:"Nellore"},

    {id:"1",stateId:"3",name:""},
    {id:"2",stateId:"3",name:""},
    {id:"3",stateId:"4",name:"Kochi"},
    {id:"4",stateId:"4",name:"Thiruvendram"},

    {id:"1",stateId:"5",name:"Denver"},
    {id:"2",stateId:"5",name:"Houstan"},
    {id:"3",stateId:"6",name:"Austin"},
    {id:"4",stateId:"6",name:"Richmond"},

    {id:"1",stateId:"7",name:"London"},
    {id:"2",stateId:"7",name:"Liverpool"},
    {id:"3",stateId:"8",name:"Bristol"},
    {id:"4",stateId:"8",name:"Doncaster"}
 ]

 const [country,setCountry] = useState([]);
 const [state,setState] = useState([]);
 const [city,setCity] = useState([]);
 const [image,setImage]=useState('');
 const [show,setShow]=useState(true);
 const [fname,setName]=useState('');


 useEffect(()=>{
    setCountry(countries);
 },[])
const handleCountry = (id)=>{
   const dt = states.filter(x=>x.countryId === id);
   setState(dt);
} 
const handleState= (id)=>{
    const dt = cities.filter(x=>x.stateId === id);
    setCity(dt);
 } 

 const handleImage=(e)=>{
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file)=>{
        return URL.createObjectURL(file)
    });
    setImage(imagesArray);
  
 }

    return (
        <div className='profile_page'>

            <div className='title'>  
             <img className='title_image' src="https://www.transparentpng.com/thumb/heart/picture-heart-outline-png-30.png" alt="logo"/><span> <h2>Health Tracker</h2></span> 
            </div>

            <div className='create_profile'>
                <div className='enter_data'>
                    <h1>Welcome! Create your healthy profile</h1>
                    <p>Keep moving & Stay healthy</p>
                    <h6>Add an avatar</h6>
                </div>

                <div className='upload_photo'>
                     <div className='circle'>
                    {         
                            image&&
                        
                            image.map((image, index)=>{
                                
                              return(
                              
                                
                                 <img src={image} alt="" id="image_upload"/> 
                                 
                                
                         
                              )
                          
                            })
                            
                        }
                    
                    {show ? <i className="fa-solid fa-camera" id="camera" ></i> : " " }   
                    </div>
                   <button id="btn" onClick={()=>setShow(!show)}><input id="file_input" onChange={handleImage} type="file"/>{show ? "Choose image":"Change image"}</button>
                  
                    {/* <input type="file" onChange={handleImage} onClick={()=>setShow(false)}/> */}
                    
                </div>
            
               <div className='personal_info'>
                <p>Personal information</p>
                    <div className='name_feild'>
                    <label>First Name</label> <label>Last Name</label> <br/>
                    <input type="text"  placeholder='Name'  className="details"/> <p>{fname}</p> 
                    <input type="text"  placeholder='Last name' id="input" className="details"/>
                    </div>
                    <br/> <br/><br/>
                    <div className='contact_feild'>
                    <label>Phone Number</label> <label>Email ID</label><br/>
                    <input type="text" placeholder='Phone number'className="details"/>
                    <input type="text" placeholder='Email'  id="input"  className="details"/>
                    </div>
                </div>

                 <div className='health_info'>
                   <div className='info_label'>
                   <label>Gender</label>
                   <label className='age'>Age</label>
                   <label className='height'>Height</label>
                   <label className='weight'>Weight</label>
                   <label className='bloodgroup'>BloodGroup</label>
                   </div>
               
                   <div className='info_values'> 
                   <select name="gender" className='gender' placeholder='select' >
                    <option disabled selected hidden>select</option>
                    <option value="female" key="">Male</option>
                    <option value="female" key="">Female</option>
                   </select>
                   <input type="text" className='health_data details' placeholder='ex 20'/>
                   <input type="text" className='health_data details'  placeholder='ex 120cm' />               
                   <input type="text" className='health_data details' placeholder='60kg'/>
                   <input type="text" className='health_data details' placeholder='ex B+'/>
                   </div>
                 </div>
               <div className='address_feild'>
               <div className='add_location'>
               <p>Location</p>
                {/*<p className='auto_fill'> File as per my address detail </p><span><input type="checkbox" id='add_check'/></span> <br/> */}
                </div> 
                <br/>
                <label className='add_label'>Address Line</label>
                <input type="text" placeholder='Address' id="enter_address" />
                </div>

                <div className=' health_info' id="place_info">
                   <div className='place_label'>
                   <label>Country/Region</label>
                   <label className='state'>State</label>
                   <label className='town'>Town/City</label>
                   <label className='pincode'>Pincode</label>
                  </div>
              

              <div className='places'>

                <select name="select" className='select_place' placeholder='select' onChange={(e)=> handleCountry(e.target.value)}>
                    <option disabled selected hidden >select</option>
                    {
                        country&&
                        country !== undefined ?
                        country.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No Country"
                    }
                </select>
                <select name="select" className='select_place' onChange={(e)=> handleState(e.target.value)}>
                <option disabled selected hidden >select </option>
                    {
                        state&& 
                        state!==undefined ?
                        state.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No State"

                    }
                </select>
                <select name="select" className='select_place'>
                    <option disabled selected hidden >select </option>
                    {
                        city&& 
                        city!==undefined?
                        city.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No City"

                    }
                </select>
                <input name="select" className='select_place'/>
              </div>
            </div>
              <div className='btn_container'>
             <Link to='/rateus'> <button className='next'>Next</button></Link>
              </div>
           
        

           </div>      
        </div>
    );
}

export default CreateProfile;