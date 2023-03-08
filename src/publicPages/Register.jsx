import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Resizer from "react-image-file-resizer";
import userDefault from "../asserts/defaultuser.png";
import "../styles/Register.css";


const Register = () => {

    const [username,setusername] = useState("");
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [userImg,setUserImg] = useState("");

  function fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          100,
          100,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            setUserImg(uri);
          },
          "base64",
          150,
          0
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

    const handleRegister = async (event) => {
        event.preventDefault()
        const responce = await fetch("http://localhost:1337/api/register",
        {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username,
                userImg,
                name,
                email,
                password
            })
        });
        const data = await responce.json();
        if(data.status === "ok"){
            window.alert("Registration Success")
            window.location.href = "/login";
        }
        else{
            alert("email or username already exists");
        }
    }

  return (
    <> 
        <form onSubmit={handleRegister}>
            <label htmlFor="input">
                <input type="file" onChange={fileChangedHandler} id="input"/>
                <div id="userb">
                    <img src={userImg || userDefault} alt="" id="useri"/>
                </div>
            </label>
            <p>User Name</p>
            <input type="text" onChange={(event)=>{setusername(event.target.value)}}/>
            <p>Full Name</p>
            <input type="text" onChange={(event)=>{setname(event.target.value)}}/>
            <p>Email</p>
            <input type="email" onChange={(event)=>{setemail(event.target.value)}}/>
            <p>Password</p>
            <input type="password" onChange={(event)=>{setpassword(event.target.value)}}/>
            <br />
            <input type="submit" />
        </form>
        <Link to="/login">Login</Link>
    </>
  )
}

export default Register

