import React,{useState} from 'react';
import '../css/style.css';
import {Link} from 'react-router-dom';

function Signup() {

    const [registration, setregistration] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch('http://localhost:3001/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(registration)
        })
            .then((res)=>console.log(res))
            .catch((err)=>alert(err))

        setregistration({
            name:'',
            email:'',
            password:''})
        }
    
    const handleChange=(event)=>{
        setregistration({
            ...registration,
            [event.target.name]:event.target.value
        })
    }
    return (
        <form className="user-container" onSubmit={handleSubmit}>
           <input 
                type="text"  
                id="name" 
                name="name" 
                value={registration.name} 
                placeholder="USERNAME"
                onChange={handleChange}
                />
           <input 
                type="email"  
                id="email" 
                name="email" 
                value={registration.email} 
                placeholder="EMAIL"
                onChange={handleChange} 
                />
           <input 
                type="password"  
                id="password" 
                name="password" 
                value={registration.password} 
                placeholder="PASSWORD" 
                onChange={handleChange}
                />
           <button 
                type="submit">Register</button>
            <Link to="/signin"  className="Link">Already registered?Please login here.</Link>    
        </form>
    )
}

export default Signup
