import React from 'react';
import image from '../../images/headshot.jpeg';
import "../../style.css";

export default function About() {
  return (
    <div class="about">
      <h1>Sally Vogel</h1>
      <hr></hr>
      <img src={image} alt="headshot" class="headshot"></img>
      <p>
        I am Sally
      </p>
    </div>
  );
}