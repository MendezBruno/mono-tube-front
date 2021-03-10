import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import {Link, useHistory} from "react-router-dom";

export class Navbar extends React.Component {

    constructor(props) {
        super(props);
     }

    render() {
        return (
            <div className="navbarContainer">
                <div className="left">
                    <Link  id="homeBtn" to={`/home`}>
                        <YouTubeIcon id="icon" style={{color: "red"}}/>
                        <h1>MonoTube</h1>
                    </Link>
                </div>
                <div className="center">
                    <input id="searchBar" placeholder="Search"/>
                    <button id="searchButton">
                        <SearchIcon style={{color: "grey"}}/>
                    </button>
                </div>
                <div className="right">
                    <Link  id="createVideo" to={`/formVideos`}>
                        <VideoCallIcon id="icon"/>
                    </Link>
                </div>
            </div>
        );
    }
};


