import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Add,
  Call,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>clever programmer</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>text Channels</h4>
            <Add className="sidebar__addChannel" />
          </div>
        </div>
        <div className="sidebar__channelsLisr">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voice">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://lh3.googleusercontent.com/TZCu51BGKuho7jXhtoAcsLEqhSlJXRJsTvfZWU9RaMxyQMFju2IsCeK5cESm1KZBy4sYEt2lDb3JVvRc9vPzO_zO5Rje2mSogz3Vp68_BeBRE_94pYLJcZ_q4vUsJfU__NmW_Mtind90c2KBYcaFUu9PUV0HwRSRuEtfVE-z-BhP0pW_i6u3EdDRxn66Q34uoGzm79l0asqiDCnyg9J5kTCdkE69YpIwrQrF-5Auxs8enRh1GfVqkhuXvzz8apOZuocMgTb2xWsXnG3Z3sDplk6wr3EpoAxdNAmm5KE0WETU5VXEO0fFp-45G2oQSwKvHVRGb3GNaBsq1Wpqvgd6FH3QioDRXLxkZ_S5US8DuCrWFHmdSBK-aeQ_RlY2uhEvQVPSLlXKQO8qO9p2-gMzBkqFJsfjwWS7GMLScmnDz-fdu7gjVzcIiuon45ni5ScgeFnjmR24kzqQOp2kELH3JCDZDqZri1f5ppOMx8_-gFWoSkqN7fFt8Y2wVHEsEc8zzrLcDp3wfLZrl-fV4S22g5lUwmhEWWX3Gose8--AWQmFrNEJvRdGLt8jBoRfJy03m3NIJRrE-2m-IZct9Qwv1ScdOvoEf3ULPyWbDoGKrLYkYzqmOJ08w4fEkjlGsso20FIKIeqNLBhFmqnzvIqK0OVl5tJBE-D57ilNzia4l33afMcT3PuJkmKBodS0EC0=w490-h940-no?authuser=0" />
        <div className="sidebar__profileInfo">
          <h3>shawn</h3>
          <p>#3120</p>
        </div>
        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
