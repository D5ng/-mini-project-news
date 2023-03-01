import Component from "../core/Component.js";

export default class NewsList extends Component {
  template() {
    const { list } = this.props.state;
    return `
      <div class="inner-container news-container">
          <ul class="news-list__items">
            ${list.map((news) => `
              <li class="news-list__item">
                <a href=${news.url}>
                  <div class="news-list__image">
                    ${
                      news.urlToImage
                        ? `<img src=${news.urlToImage} alt="news thumbnail" />`
                        : `<img src="https://via.placeholder.com/150" alt="no thumbnail" />`
                    }
                  </div>
                  <div class="news-list__contents">
                    <span>${news.source.name}</span>
                    <h2>${news.title}</h2>
                    <p>Contents...</p>
                  </div>
                </a>
              </li>
            `).join("")}
          </ul>
        </div>
    `;
  }
}
