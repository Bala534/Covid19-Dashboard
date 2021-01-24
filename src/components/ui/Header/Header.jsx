import React from "react";
import Github from "../../../assets/github1.png";
import IndiaIcon from "../../../assets/india.png";
import World from "../../../assets/world.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <div className="Header">
        Covid-19 {props.dashboard} Visualization Dashboard {props.width < 1024 ? "" : " Dashboard"}
        <img style={{
          height: 50,
          borderRadius: 50,
        }} src='https://st.depositphotos.com/1005534/1256/v/600/depositphotos_12563658-stock-illustration-india-flag-glossy-button.jpg' />

      </div>
      
        
        

      
    </div>
  );
};

export default Header;