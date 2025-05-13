import React from "react";
import OpenLink from "src/components/OpenLink";
import CopyLink from "src/components/CopyLink";

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

export default HelpfulResource;
