import React, { useState } from 'react'

const Login = () => {
    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:1337/api/login",
        {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();

        if(data.user){
            localStorage.setItem('token',data.user);
            alert("Login Succeessful");
            window.location.href = "/main/home";
        }
        else{
            alert("Please Check emial or password");
        }
        console.log(data);
    }
  return (
    <form onSubmit={handleLogin}>
        <p>UserName</p>
        <input type="text" onChange={(event)=>{setUserName(event.target.value)}}/>
        <p>Password</p>
        <input type="password" onChange={(event)=>{setPassword(event.target.value)}}/><br />
        <input type="submit" value="Login" />
    </form>
  )
}

export default Login