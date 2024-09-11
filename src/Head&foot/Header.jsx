import React from "react";

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Header(){

return <div className="header">
   
    <h1>  <TextSnippetIcon /> PERSONAL NOTE</h1>
    <div className="icons">
    <a className="icon" href="https://www.facebook.com/maryjanet.b.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FacebookIcon style={{ color: "white", fontSize: 40 }} />
      </a>
      <a className="icon" href="https://www.linkedin.com/in/praveen-b-94067b183/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon style={{ color: "white", fontSize: 40 }} />
      </a>
      <a className="icon" href="https://github.com/Praveenzoro" target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ color: "white", fontSize: 40 }} />
      </a>
      <a className="icon" href="https://www.instagram.com/gh0st.jx/?igsh=MTcycWNleWlndjAxOA%3D%3D" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ color: "white", fontSize: 40 }} />
      </a>
</div>
</div>





};