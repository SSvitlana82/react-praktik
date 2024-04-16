import axios from "axios";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";
import Error from "../Error/Error";
import { fetchArticlesWithTopic } from "../../articles-api";

const Task1 = ({}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /* useEffect(() => {
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
  }, []); */

  const onSearch = async (search) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const dataArticle = await fetchArticlesWithTopic(search);

      setArticles(dataArticle);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
    console.log(search);
  };
  return (
    <div>
      <h1>Latest articles</h1>
      <SearchForm onSearch={onSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles}></ArticleList>}
    </div>
  );
};

export default Task1;
