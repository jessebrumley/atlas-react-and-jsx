import React from "react";
import profilePic from "src/assets/BrumleyJesse.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img src={profilePic} alt="Jesse Brumley professional profile" />
      <p>
        Hi, my name is Jesse Brumley. I'm a software developer specializing in full-stack web design, with a background in customer service. I’m currently in my final trimester at Atlas School for Software Engineering in Tulsa, Oklahoma. <br></br>Currently I'm learning to use React, a front-end JavaScript library that's quickly becoming my favorite tool to build modern interfaces. I hope to transition into a creative role in tech where I can apply my skills to innovative projects and grow through new challenges. <br></br>Outside of work, I enjoy spending time with friends, reading, listening to music, and unwinding with video games.
      </p>
    </div>
  );
}

export default AboutMe;
