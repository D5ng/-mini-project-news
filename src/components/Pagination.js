import Component from "../core/Component.js";

export default class Pagination extends Component {
  template() {
    return `
      <ul class="pagination-lists">
        <li class="prev">
          <button><</button>
        </li>
        <li class="active">
          <button>1</button>
        </li>
        <li class="pagination-number">
          <button>2</button>
        </li>
        <li class="pagination-number">
          <button>3</button>
        </li>
        <li class="pagination-number">
          <button>4</button>
        </li>
        <li class="pagination-number">
          <button>5</button>
        </li>
        <li class="pagination-number">
          <button>6</button>
        </li>
        <li class="pagination-number">
          <button>7</button>
        </li>
        <li class="pagination-number">
          <button>8</button>
        </li>
        <li class="pagination-number">
          <button>9</button>
        </li>
        <li class="pagination-number">
          <button>10</button>
        </li>
        <li class="next">
          <button>></button>
        </li>
      <li class="next">
        <button></button>
      </li>
    </ul>
    `;
  }
}
