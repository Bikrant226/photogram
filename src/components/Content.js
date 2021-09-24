import React, { useState} from "react";
import "../App.css";
import axios from 'axios';
import LikeCounter from "./LikeCounter";
import {useEffect } from "react";
const Content=()=>{

const [image,setImage]=useState([]);
// const [isHovered,setIsHovered]=useState(false);

const getVideos=async()=>{
  await axios.get('http://localhost:3001/upload')
        .then((response)=>setImage(response.data))
        .catch((error)=>console.log(error))
  }


useEffect(() => {
  getVideos()
}, [])



return(
  <div className="container">
    {image.map((e)=>(
        <div key={e.id}>
          <img src={process.env.PUBLIC_URL + `/files/${e.file}`} alt="images" />
            <LikeCounter/>
          
          </div>
      ))
    }
    <p></p>
  </div>
)}



export default Content;