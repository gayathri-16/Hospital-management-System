import React from 'react';
import '../NavcssFiles/dashboard.css'
import '../NavcssFiles/navbar.css'
import {Link } from 'react-router-dom';

import SideNavbar from '../SideNavbar';
function DashBoard(props) {

    return (
        <div className='dashboard_containter'>
        <div className='sidenav-component'>
        <SideNavbar/>
        </div>
    
         <div className='dashboard_details'>
           
            <div className='addmember'>
               <div id="arrow_icon"><span class="material-symbols-rounded" id="arrow">chevron_left</span><span>Add Member</span></div> 
                <div><span class="material-symbols-rounded" id="close">cancel</span></div>
            </div>
        
            <div id='header_info'>      
              <div id="line_space">
                <div id="line"></div>
                <div id="line1"></div>
                <div id="line2"></div> 
               </div>
                <Link to="/basicinfo"><h4>Basic Info</h4></Link>
                <Link to="/addmedicalhistory"> <h4>Add Medical History</h4></Link> 
                <h4>Report</h4>
               </div>
            
         </div>

        </div>
    );
}

export default DashBoard;