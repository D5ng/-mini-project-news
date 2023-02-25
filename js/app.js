import SearchInput from "./components/SearchInput.js";
import NewsList from "./components/NewsList.js";
import Components from "./core/Components.js";

export default class App extends Components {
  constructor(target) {
    super(target);
  }

  template(){
    this.elem = document.createElement('div');
    this.elem.className = 'news';
    this.elem.innerHTML = `
      <div class="inner-container news-container"></div>
    `;

    return this.elem;
  }

  mounted(){
    const newsContainerElem = document.querySelector(".news-container");

    new SearchInput({ target: newsContainerElem });
    new NewsList({ target: newsContainerElem });
  }
}