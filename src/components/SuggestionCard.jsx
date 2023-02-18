import React from 'react'
import "../components/SuggestionCard.css";
import { Icon } from '@iconify/react';

const SuggestionCard = () => {
  return (
    <div id="SuggestionCard">
        <div id="sphotonname">
            <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="SuggestUserImg" id="SuggestUserImg"/>
            <p id="SuggestUserName">Vicky</p>
        </div>
        <Icon icon="octicon:person-add-16" width="20px" id="addFriend"/>
    </div>
  )
}

export default SuggestionCard