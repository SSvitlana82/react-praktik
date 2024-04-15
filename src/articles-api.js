import axios from "axios";

export const fetchArticlesWithTopic = async (topic) => {
  const url = `https://hn.algolia.com/api/v1/search?query=${topic}`;
  const response = await axios.get(url);

  return response.data.hits;
};
