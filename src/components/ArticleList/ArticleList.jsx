import { useState } from "react";
import Articleitem from "../Articleitem/Articleitem";

const ArticleList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <Articleitem url={url} title={title}></Articleitem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
