export default class Component {
  constructor(target) {
    this.target = target;

    this.setUp();
    this.render();
    this.mounted();
    this.setEvent();
  }

  setUp() {}

  template() {
    return "";
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();

    // console.log('???');
  }

  mounted() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setEvent() {}
}
