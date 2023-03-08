import React from 'react'
import "../components/PostCards.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PostCards = () => {
  return (
    
    <div id="postcard">
        <Link to="/post/192" id="postimage">
          <img src="https://caphe.sfo2.cdn.digitaloceanspaces.com/assets/images/yolk-free-ios-ui-kit-design-system-for-sketch-thumb.jpg" alt="post" id="postimageinner" />
        </Link>
        <div id="postcontrols">
          <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="userimage" id="userimage"/>
          <div id="control">
            <Icon icon="mingcute:share-forward-line" height="28px" id="share"/>
            <Icon icon="icon-park-outline:like" height="25px" id="like"/>
          </div>
        </div>
    </div>
    
  )
}

export default PostCards