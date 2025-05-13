import React from "react";
import copyIcon from "src/assets/copy.svg";

function CopyLink({ link }) {
  const handleClick = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        console.log("Link copied to clipboard:", link);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <img
      className="copy"
      src={copyIcon}
      alt="Copy link"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default CopyLink;
