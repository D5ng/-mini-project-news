export default class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.country = "";
  }

  async request(API) {
    try {
      const response = await fetch(API);

      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } 

      const errorData = await response.json();
      return errorData
      
    } catch (e) {
      throw new Error("News API Error");
    }
  }

  async fetchNews(keyword = "", pageNumber = 1) {
    return keyword
      ? await this.request(
          `https://newsapi.org/v2/everything?q=${keyword}&pageSize=10&page=${pageNumber}&apiKey=${this.API_KEY}`
        )
      : await this.request(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${pageNumber}&apiKey=${this.API_KEY}`
        );
  }
}
