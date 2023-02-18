import React from "react";
import "./App.css";
import Logo from "./asserts/logo.png";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { Icon } from "@iconify/react";
import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";

const App = () => {
  return(
      <BrowserRouter>
        <div id="topNav">
          <Link to="/"><img src={Logo} alt="logo" id="logo"/></Link>
          <Icon icon="ion:notifications-outline" height="25px" id="notification" />
        </div>
        <div id="section">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/find" element = {<Find/>}/>
            <Route path="/profile" element = {<Profile/>}/>
            <Route path="/settings" element = {<Settings/>}/>
          </Routes>
        </div>
        <div id="bottomNav">
          <NavLink to="/" className="btn"><Icon icon="iconoir:home-simple-door" height="30px" id="button" /></NavLink>
          <NavLink to="/find" className="btn"><Icon icon="majesticons:search-line" height="30px" id="button" /></NavLink>
          <NavLink to="/profile" className="btn"><Icon icon="mingcute:user-2-line" height="28px" id="button" /></NavLink>
          <NavLink to="/settings" className="btn"><Icon icon="mingcute:settings-3-line" height="30px" id="button" /></NavLink>
        </div>
      </BrowserRouter>
  );
}

export default App;