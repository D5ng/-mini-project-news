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
      pageInfo: {
        currentPage: 1,
        totalResults: 0,
        firstPage: 0,
        lastPage: 0,
        keyword: "",
      },
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
    new NewsList(newsListElem, { state: this.state });
    new Pagination(pagination, { pageInfo: this.state.pageInfo });
  }

  loading(element) {
    element.innerHTML = "뉴스 데이터를 불러오는중 ...";
  }

  fetchRequest(inputValue, currentPage = 1) {
    this.loading(document.querySelector(".news-list"));
    this.props.api.fetchNews(inputValue, currentPage).then((result) => {

      if(result.status === 'ok'){
        const pageInfo = this.pagination(
          result.totalResults,
          +currentPage,
          inputValue
        );
        this.setState({ list: result.articles, pageInfo });
      } else {
        alert(result.message);
        window.location.href = '/'
      }
    });
  }

  fetchFirstNews() {
    this.fetchRequest();
  }

  setEvent() {
    this.addEvent("submit", ".news-search__form", (e) => {
      e.preventDefault();
      this.fetchRequest(e.target[0].value);
    });

    this.addEvent("click", ".header-category", (e) =>
      this.fetchKeyword(e.target.textContent)
    );

    this.addEvent("click", ".pagination-lists", (e) => {
      const { keyword, currentPage, totalPage } = this.state.pageInfo;
      let option;

      if (e.target.closest(".prev"))
        option = currentPage - 1 === 0 ? 1 : currentPage - 1;

      if (e.target.closest(".next"))
        option = currentPage + 1 === totalPage ? totalPage : currentPage + 1;

      if (e.target.closest(".pagination-number")) option = e.target.textContent;

      this.fetchRequest(keyword, option);
    });
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

  pagination(totalResults, currentPage, keyword = "") {
    const DISPLAY_PAGE_COUNT = 10;

    // 총 페이지수
    const totalPage = Math.ceil(totalResults / DISPLAY_PAGE_COUNT);

    // 화면에 보여질 페이지 그룹
    const displayPageGroup = Math.ceil(currentPage / DISPLAY_PAGE_COUNT);

    // 화면에 그려질 마지막 페이지
    const lastPage =
      displayPageGroup * DISPLAY_PAGE_COUNT > totalPage
        ? totalPage
        : displayPageGroup * DISPLAY_PAGE_COUNT;

    // 화면에 그려질 첫번째 페이지
    const firstPage =
      lastPage - (DISPLAY_PAGE_COUNT - 1) <= 0
        ? 1
        : lastPage - (DISPLAY_PAGE_COUNT - 1);

    const pageInfo = {
      ...this.state.pageInfo,
      currentPage,
      firstPage,
      lastPage,
      keyword,
    };

    return pageInfo;
  }
}
