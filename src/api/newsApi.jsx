import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "79ed60d6fb1940eba320b37b3517fcea";

export const fetchArticles = async (category, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: category,
        from: "2024-05-18",
        sortBy: "publishedAt",
        apiKey: API_KEY,
        page,
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    throw error;
  }
};
