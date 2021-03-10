import React from "react";
import { Redirect } from "react-router-dom";
import { Home } from "./views/home"
import { ViewFormVideos } from "./views/viewFormVideos";
import { ViewMediaPlayer } from "./views/viewMediaPlayer";



export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },

  {
    path: "/home",
    component: Home
  },

  {
    path: "/formVideos",
    component: ViewFormVideos
  },

  {
    path: "/mediaPlayer",
    component: ViewMediaPlayer
  },

];
