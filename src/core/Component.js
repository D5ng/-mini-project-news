export default class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;

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
