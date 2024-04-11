import axios from "axios";
import { useEffect, useState } from "react";

const Task1 = ({}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = "https://hn.algolia.com/api/v1/search?query=react";
      const response = await axios.get(url);
      console.log(response);
      setArticles(response.data.hits);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task1;
