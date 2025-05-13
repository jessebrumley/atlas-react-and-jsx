import React from "react";
import dayIcon from "../assets/day.svg";
import eveningIcon from "../assets/evening.svg";
import nightIcon from "../assets/night.svg";

function Greeting() {
  const hour = new Date().getHours();
  let greetingText = "";
  let greetingIcon = "";

  if (hour >= 6 && hour < 12) {
    greetingText = "Good Morning!";
    greetingIcon = dayIcon;
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon!";
    greetingIcon = dayIcon;
  } else if (hour >= 17 && hour < 21) {
    greetingText = "Good Evening!";
    greetingIcon = eveningIcon;
  } else {
    greetingText = "Good Night!";
    greetingIcon = nightIcon;
  }

  return (
    <h1 className="greeting">
      <img src={greetingIcon} alt="greeting icon" />
      {greetingText}
    </h1>
  );
}

export default Greeting;
