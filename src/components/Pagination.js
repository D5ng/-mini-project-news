import Component from "../core/Component.js";

export default class Pagination extends Component {
  template() {
    return `
      <ul class="pagination-lists">
        <li class="prev">
          <button>&lt;</button>
        </li>
        ${this.createPagination()}
        <li class="next">
          <button>&gt;</button>
        </li>
    </ul>
    `;
  }

  createPagination() {
    const { lastPage, firstPage, currentPage } = this.props.pageInfo;

    let html = ``;

    for (let i = firstPage; i <= lastPage; i++) {
      html += `
        <li class="pagination-number">
          <button class=${currentPage === i ? "active" : ""}>${i}</button>
        </li>
      `;
    }

    return html;
  }
}
