import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){ 
  const navigate = useNavigate();
    return <div>
        <h4>Login</h4>
        
        <form className="border border-2 mx-auto w-25 p-2 rounded" onSubmit={async (e) =>{
            e.preventDefault();
            const token = await axios({
              method: 'POST',
              url: 'https://jwt.sulla.hu/login',
              data: {
                username: document.getElementById('userNameLogin').value,
                password: document.getElementById('passwordLogin').value
              }
            })
            .then((resp) => {
                localStorage.setItem('token',resp.data.token);
                navigate("Display")
            })
            .catch((error)=> {
              console.log(error)
            })
          }}>
            <input className='form-control' type='text' id='userNameLogin' name='userNameLogin' placeholder='username' ></input>
            <br/>
            <input className='form-control' type='password' id='passwordLogin' name='passwordLogin' placeholder='password' ></input>
            <br/>
            <button className='btn btn-secondary' type='submit'>Send</button>
          </form>

    </div>
}