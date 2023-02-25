import Components from "../core/Components.js";

export default class SearchInput extends Components {
  template() {
    console.log("실행순서1");
    this.form = document.createElement('form');
    this.form.className = "news-form";
    this.form.innerHTML = `
      <div class="news-form__search">
        <input type="text" />
        <button type="button">
          <i class="ph-magnifying-glass"></i>
        </button>
      </div>
    `;
    return this.form
  }
} 