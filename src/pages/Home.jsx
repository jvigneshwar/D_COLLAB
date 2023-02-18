import React from "react";
import PostCards from "../components/PostCards";
import SuggestionCard from "../components/SuggestionCard";
import "../styles/Home.css";

const Home = () => {
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