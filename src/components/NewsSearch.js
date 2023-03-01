import Component from "../core/Component.js";

export default class NewsSearch extends Component {
  template() {
    return `
      <div class="inner-container news-container">
        <form class="news-search__form">
          <div class="news-search__inputBox">
            <input type="text" class="news-search__input" />
            <button>
              <i class="ph-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    `;
  }
}
