import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Axios from "axios";


export default function NormalUser() {
  const [post,setPost] = useState('');
  const [title,setTitle] = useState('');
  let history = useHistory();
  const logout=()=>{
    history.push('./login')
  }
  const submit=()=>{
    Axios.post('http://localhost:3001/insert',{
      post:post,
      title:title
    }).then(()=>{
      alert('Success')
    })
  }
  return (
    <div>
      <h1>Hello User</h1>
      <input type='text' onChange={(e)=>{setTitle(e.target.value);}} placeholder="title"/>
      <input type='text'onChange={(e)=>{setPost(e.target.value);}} placeholder="share thoughts" />
      <button onClick={submit} >Post</button><br></br>
      <button onClick={logout}>Logout</button>
    </div>
  );
}