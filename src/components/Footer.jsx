import React from "react";
import links from "src/assets/links.json";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}

export default Footer;
