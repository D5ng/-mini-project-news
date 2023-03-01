import Component from "../core/Component.js";

export default class Header extends Component {
  template() {
    return `
    <div class="inner-container header-container">
      <h1 class="header-logo"><a href="/">D-News</a></h1>
      <nav>
        <ul class="header-category">
          <li class="header-category__list"><button class="news-category">sports</button></li>
          <li class="header-category__list"><button class="news-category">science</button></li>
          <li class="header-category__list"><button class="news-category">it</button></li>
          <li class="header-category__list"><button class="news-category">apple</button></li>
        </ul>
      </nav>
    </div>
    `;
  }
}
