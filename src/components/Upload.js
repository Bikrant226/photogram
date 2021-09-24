import React,{useState,useEffect} from 'react';
import '../css/style.css';
import axios from 'axios';

const Upload=()=>{

    const [file,setFile]=useState()
    const handleChange=(event)=>{
        setFile(event.target.files[0])
    }


    const handleSubmit=async(event)=>{
        event.preventDefault();
        
        const formData=new FormData();
        formData.append('file',file);
        try {
            await axios.post('http://localhost:3001/upload',formData)
                        .then(()=>alert('Successfully uploaded!!'))
                        .catch(()=>alert('There was an error,please check file extension!!'))
        }catch(err){
            console.log(err)
        }
    }

        
    return(
        <form className="user-container" onSubmit={handleSubmit} encType="multipart/form-data">
        <input 
             type="file"  
             id="file" 
             name="file" 
             placeholder="FILE"
             onChange={handleChange}
             />
          {/* <input type="text" name="" id="caption" placeholder="Add a caption" /> */}

        <button type="submit">POST</button>

     </form>
    );
}

export default Upload;