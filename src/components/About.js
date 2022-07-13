import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p> Holla @Me Whenever in New York!</p>
    <img src={image} alt= "I made This" />
  </div>;
}

export default About;
