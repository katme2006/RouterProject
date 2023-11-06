import { useState } from "react";

function About() {
  return (
    <>
     <h1 className="text-blue-400 text-center w-3/4 m-auto font-black text-7xl">About Recipes Now</h1>
      <p>Welcome to Quick Recipes – your go-to place for straightforward, no-fuss cooking.</p>
      
      <h2>Our Philosophy</h2>
      <p>Life's too short for long reads before the actual recipe. We believe you should spend more time cooking and eating than reading about someone's weekend. So, we've ditched the long stories to give you what you really came for - the recipes.</p>
      
      <h2 className="text-1xl">What We Offer</h2>
      <ul className="flex flex-col m-3">
        <li>Easy-to-follow recipes with clear instructions</li>
        <li>Minimal prep & cooking times</li>
        <li>Filters to quickly find the type of meal you’re craving</li>
      </ul>
      
      <h2>Get In Touch</h2>
      <p>If you've got suggestions, feedback, or just want to say hi, drop us a line at contact@quickrecipes.com.</p>


    </>
  );
}

export default About;
