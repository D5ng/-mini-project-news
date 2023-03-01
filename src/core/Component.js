export default class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;

    this.setUp();
    this.render();
    this.mounted();
    this.setEvent();
    this.fetchFirstNews();
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

  addEvent(type, selector, callback){
    this.target.addEventListener(type, (e) => {
      if(!e.target.closest(selector)) return false
      callback(e);
    })
  }

  setEvent() {}
  fetchFirstNews(){};
}
