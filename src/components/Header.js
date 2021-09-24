import '../css/Header.css';
import React,{useState} from 'react'

import Profile from './Profile';
import {Link} from 'react-router-dom';
const Header=()=>{
    const [profileModal,setProfileModal]=useState(false);

    return(
        <div className="header">
            <span className="name">PhotoGram</span>
            <Link to="/" id="browse">Browse</Link> 
            <Link to="/upload" id="post">Post</Link>
            <input type="search" placeholder="Search" />
            <button className="profile" onClick={()=>setProfileModal(!profileModal)}>Profile</button>
            {
                profileModal?<Profile/>:null
            }
        </div>
    );
}

export default Header;