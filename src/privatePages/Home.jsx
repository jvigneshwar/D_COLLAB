import React, { useEffect } from "react";
import PostCards from "../components/PostCards";
import SuggestionCard from "../components/SuggestionCard";
import "../styles/Home.css";

const Home = () => {

    useEffect(()=>{
        fetch("http://localhost:1337/api/home",
        {
            method: "GET",
            headers:{
                "x-access-token" : localStorage.getItem('token'),
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            if(data.status === "failed"){
                window.location.href = "/login";
            }
        })
    },[])

    return(
        <div id="home">
            <div className="posts">
                <PostCards/>
                <PostCards/>
                <PostCards/>
                <PostCards/>
                <PostCards/>
            </div>
            <div className="suggestion">
                <h3 id="suggesthead">Suggestions</h3>
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
            </div>
        </div>
    );
}

export default Home;