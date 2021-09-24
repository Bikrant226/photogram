import axios from 'axios';
import React,{useState} from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';
function Signup() {
  
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const handleChange=(event)=>{
        setCredentials({
            ...credentials,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/signin/',credentials)
             .then(res=>{
                 console.log(res.data)
                           })
             .catch(err=>{
               alert(err)
            })
    
    }
    return (
        <form className="user-container" onSubmit={handleSubmit}>
           <input type="email"  id="email" name="email" placeholder="EMAIL" value={credentials.email} onChange={handleChange} />
           
           <input type="password"  id="password" name="password" placeholder="PASSWORD" value={credentials.password} onChange={handleChange}/>
          
           <button type="submit">Login</button>
           <Link to="/signup" className="Link" >Not yet registered?Please register here.</Link>  
        </form>
    )
}
export default Signup
