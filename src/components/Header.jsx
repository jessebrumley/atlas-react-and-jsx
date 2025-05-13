import React from "react";
import Greeting from "src/components/Greeting";
import SocialLinks from "src/components/SocialLinks";

function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}

export default Header;
