import Components from "../core/Components.js";


export default class NewsList extends Components {
  template (){
    console.log('실행순서2')
    this.elem = document.createElement('ul');
    this.elem.className = "news-lists";
    this.elem.innerHTML = `
      <li class="news-list">
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
      <li class="news-list">
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
      <li class="news-list">
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
    `;

    return this.elem;
  }
}