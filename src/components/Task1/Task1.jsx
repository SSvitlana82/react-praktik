import axios from "axios";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import { fetchArticlesWithTopic } from "../../articles-api";

const Task1 = ({}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const dataArticle = await fetchArticlesWithTopic("react");
        console.log(dataArticle);

        setArticles(dataArticle);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <Loader />}
      {error && <p>Error</p>}
      {articles.length > 0 && <ArticleList items={articles}></ArticleList>}
    </div>
  );
};

export default Task1;
