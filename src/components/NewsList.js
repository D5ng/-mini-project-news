import Component from "../core/Component.js";

export default class NewsList extends Component {
  template() {
    return `
      <div class="inner-container news-container">
          <ul class="news-list__items">
            <li class="news-list__item">
              <a href="#">
                <div class="news-list__image">
                  <img src="" alt="news thumbnail" />
                </div>
                <div class="news-list__contents">
                  <span>category</span>
                  <h2>Title</h2>
                  <p>Contents...</p>
                </div>
              </a>
            </li>
            <li class="news-list__item">
              <a href="#">
                <div class="news-list__image">
                  <img src="" alt="news thumbnail" />
                </div>
                <div class="news-list__contents">
                  <span>category</span>
                  <h2>Title</h2>
                  <p>Contents...</p>
                </div>
              </a>
            </li>
            <li class="news-list__item">
              <a href="#">
                <div class="news-list__image">
                  <img src="" alt="news thumbnail" />
                </div>
                <div class="news-list__contents">
                  <span>category</span>
                  <h2>Title</h2>
                  <p>Contents...</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
    `;
  }
}
