import { useState } from "react";

const Articleitem = ({ url, title }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </div>
  );
};

export default Articleitem;
