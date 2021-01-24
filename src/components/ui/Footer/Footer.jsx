import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <div style={{ padding: 15 }}>
      <div>
        Designed and Developed by{"  "}
        <a
          style={{
            color: "#f6565b",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          href="http://vishnu.edu.in/"
          rel="noopener noreferrer"
          target="_blank"
        >
        Team Fusion
        </a>
      </div>
    </div>
  );
};
export default Footer;
