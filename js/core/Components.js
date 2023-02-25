export default class Components {
  constructor({ target }){
    this.target = target;

    this.render()
  }

  template(){
    return '';
  }

  render(){
    this.target.appendChild(this.template());
    // this.target.innerHTML = this.template();
    this.mounted();
  }

  mounted(){}
}