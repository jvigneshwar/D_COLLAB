import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [username,setUsername] = useState(null);
  const [userImg,setUserImg] = useState(""); 
  const [imgPreview,setimgPreview] = useState();
  useEffect(()=>{
    fetch("http://localhost:1337/api/profile",
    {
        method: "GET",
        headers:{
            "x-access-token" : localStorage.getItem('token'),
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      if(data.status === "ok"){
        setUsername(data.username)
        setUserImg(data.userImg)  
      }
      else{
        window.location.href = "/login";
      }
    })
  },[])

  return (
    <>
      <img src={userImg} alt="" />
      <div>{username}</div>
      <input type="file" id="postImg" onChange={(e)=>{setimgPreview(URL.createObjectURL(e.target.files[0]))}}/>
      <img src={imgPreview} alt="postimg"/>
    </>
  )
}

export default Profile