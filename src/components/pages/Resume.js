import React from 'react';
import "../../style.css";
import { Document, Page } from 'react-pdf';
import image from "../../images/vogelResume.jpg"; 

export default function Resume() {
  return (
    <div class="resume">
      <h1>Resume</h1>
      <hr></hr>
      <p>
        Download my <a href="https://docs.google.com/document/d/1wm0MKX3_2staMPEI0ZFmzhOit9Vb0n4K67J5ZIzgRiU/edit?usp=sharing" target="_blank">Resume</a>
      </p>
      <img src={image} alt="resume" class="resumeImg"></img>
    </div>
  );
}