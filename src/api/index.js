export default class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.country = "";
  }

  async request(API) {
    try {
      const response = await fetch(API);

      if (response.ok) {
        const responseData = response.json();
        return responseData;
      }
    } catch (error) {
      throw new Error("News API Error", error);
    }
  }

  async fetchNews(keyword = "", pageNumber = 1) {
    let result;

    keyword
      ? (result = await this.request(
          `https://newsapi.org/v2/everything?q=${keyword}&pageSize=10&page=${pageNumber}&apiKey=${this.API_KEY}`
        ))
      : (result = await this.request(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${pageNumber}&apiKey=${this.API_KEY}`
        ));

    return result;
  }
}
