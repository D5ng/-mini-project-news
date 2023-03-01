import NewsSearch from "./components/NewsSearch.js";
import NewsList from "./components/NewsList.js";
import Component from "./core/Component.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Pagination from "./components/Pagination.js";

export default class App extends Component {
  setUp() {
    this.state = {
      list: [],
    };
  }

  mounted() {
    const newsSearchElem = document.querySelector(".news-search");
    const newsListElem = document.querySelector(".news-list");
    const pagination = document.querySelector(".pagination");
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer");

    new Header(header);
    new Footer(footer);
    new NewsSearch(newsSearchElem);
    new NewsList(newsListElem, {
      state: this.state
    });
    new Pagination(pagination);
  }

  loading(element) {
    element.innerHTML = "뉴스 데이터를 불러오는중 ...";
  }

  fetchNewsList(currentPage = 1) {
    this.loading(document.querySelector(".news-list"));
    this.props.api.fetchHeadline(currentPage).then((result) => {
      this.setState({ list: result.articles });
    });
  }

  fetchFirstNews() {
    this.fetchNewsList();
  }

  template() {
    return `
      <header class="header"></header>
      <main id="main">
        <section class="news-search"></section>
        <section class="news-list"></section>
        <section class="pagination"></section>
      </main>
      <footer class="footer"></footer>
    `;
  }
}
