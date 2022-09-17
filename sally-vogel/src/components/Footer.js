import React from "react";
import "../style.css";
import linkedin from '../images/linkedin.jpg';
import email from '../images/email.jpg';

export default function Footer() {
    return (
        <div class="footer">
          <div class="footer-content-right">
            <a href="https://www.linkedin.com/in/maya-lorimer/" target="_blank" rel="noreferrer"><img src={linkedin} class="icon-style" alt="Linkedin icon"></img></a>
            <a href=" mailto: vogel1@kenyon.edu" target="_blank" rel="noreferrer"><img src={email} class="icon-style" alt="Emailicon"></img></a>
        </div>
        </div>
    );
}



