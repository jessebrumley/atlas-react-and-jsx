import React from "react";
import linkedinIcon from "src/assets/linkedin.svg";
import githubIcon from "src/assets/github.svg";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/jessebrumley/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>

      <a
        href="https://github.com/jessebrumley/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialLinks;
