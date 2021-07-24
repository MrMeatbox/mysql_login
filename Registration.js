import React, {  useState } from "react";
import Axios from "axios";
import {BrowserRouter as  Redirect, Link} from 'react-router-dom';
//import Login from "./Login";


export default function Registration(){
    const [usernameReg,setUsernameReg] = useState('');
  const [passwordReg,setPasswordReg] = useState('');

  


  const register=()=>{
    Axios.post('http://localhost:3001/register',{
    username:usernameReg,
    password:passwordReg}).then((response)=>{
      console.log(response);
    })
  }

  
    return(
        <div className="App">
    <div className="registration">
        <h1>Registration</h1>
        <label>User Name</label>
        <input type="text" onChange={(e)=>{setUsernameReg(e.target.value);}} />
        <label>Password</label>
        <input type="text" onChange={(e)=>{setPasswordReg(e.target.value);}}/>
        <button onClick={register} >Registration</button>
        <p>Already have account?<Link to="/login"  >Login</Link></p>
    </div>
    

</div>
    );
}