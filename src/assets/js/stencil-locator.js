import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const stencilLocatorCss = ".element-container{display:block;font-family:\"Helvetica Neue\", Helvetica, Arial, sans-serif}.element-header{font-weight:400;font-size:24px}.element-content{padding:10px}.element-intro{margin-bottom:10px;font-size:14px;background-color:#F0F0F0}.element-input{background-color:#CC0000;padding:5px 20px 20px 20px;margin-bottom:10px;display:block}.zipcode-label{color:#FFFFFF;display:flex}.zipcode-input{width:98%;margin-top:5px;padding-left:10px;margin-bottom:20px;height:24px}.zipcode-input:hover{border-color:#F0F0F0}.element-actions{display:flex;justify-content:center;align-items:center}.search-button{background-color:#CC0000;border:1px solid #CC0000;color:#FFFFFF;font-weight:bold;height:24px;margin-left:10px;margin-right:10px;cursor:pointer}.search-button:hover{background-color:#FFFFFF;color:#CC0000}.clear-button{border:none!important;background:none !important;text-decoration:underline;margin-left:10px;margin-right:10px;cursor:pointer}";

let StencilLocator$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.search = createEvent(this, "search", 7);
  }
  componentDidLoad() {
    console.log(this.name);
  }
  onSearch() {
    // When the user clicks Search emit the zipcode value
    // A event can emit any type of value
    console.log('Value of zipCode that is going to be emitted:' + this.zipCode);
    this.search.emit({ value: this.zipCode });
  }
  handleChange(event) {
    this.zipCode = event.target.value;
  }
  render() {
    return (h("div", { class: 'element-container' }, h("h2", { class: 'element-header' }, " ", this.name), h("div", { class: 'element-content' }, h("div", { class: 'element-intro' }, "PLEASE NOTE: Many of our in-network pharmacies are helping the government administer the COVID-19 vaccines, including pharmacy chains and community pharmacies."), h("div", { class: 'element-input' }, h("label", { class: 'zipcode-label' }, "Please enter your zip-code to find the nearest stores"), h("input", { class: 'zipcode-input', placeholder: 'Zip-code in 5 digits', value: this.zipCode, onInput: (event) => this.handleChange(event) })), h("div", { class: 'element-actions' }, h("button", { class: 'search-button', onClick: () => this.onSearch() }, "Search"), h("button", { class: 'clear-button' }, "Clear")))));
  }
  static get style() { return stencilLocatorCss; }
};
StencilLocator$1 = /*@__PURE__*/ proxyCustomElement(StencilLocator$1, [1, "stencil-locator", {
    "name": [1],
    "zipCode": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["stencil-locator"];
  components.forEach(tagName => { switch (tagName) {
    case "stencil-locator":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StencilLocator$1);
      }
      break;
  } });
}

const StencilLocator = StencilLocator$1;
const defineCustomElement = defineCustomElement$1;

export { StencilLocator, defineCustomElement };
