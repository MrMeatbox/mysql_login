import Axios from "axios";
import React, {  useState } from "react";
import {BrowserRouter as  Redirect,Link,useHistory} from 'react-router-dom';
export default function Login(){
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');

const [loginStatus,setloginStatus] = useState('');
let history = useHistory();


  const login=()=>{
    Axios.post('http://localhost:3001/login',{
    username:username,
    password:password}).then((response)=>{

      if(response.data.message){
      //console.log(response.data);
      setloginStatus(response.data.message);
  }else{
      //<Redirect to="/normaluser"/>
      history.push("/normaluser")
    setloginStatus(response.data[0].username);
  }
    })
  }

    return(
        <div>
        <div className="login">
        <h1>Login</h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value);}} placeholder="User Name..."/>
        <input type="text" onChange={(e)=>{setPassword(e.target.value);}} placeholder="Password..."/>
        <button onClick={login}>Login</button>
        <p>Don't have any account?<Link to="/registration"  >Register</Link></p>
    </div>

<h1>{loginStatus}</h1>
</div>
    );
}