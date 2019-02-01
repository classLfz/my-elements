class MyInput extends HTMLInputElement {
  constructor() {
    super();

    // styles
    this.style.outline = 'none';
    this.style.border = '1px solid gray';
    this.style.borderRadius = '4px';
    this.style.padding = '4px 8px';

    // properties
    this.size = 'default';

    // events
    this.addEventListener('focus', function() {
      this.style.borderColor = '#64B5F6';
    });
    this.addEventListener('blur', function() {
      this.style.borderColor = 'gray';
    });
  }

  static get sizeOptions() {
    return {
      small: { height: 12, fontSize: 12 },
      default: { height: 14, fontSize: 14 },
      large: { height: 20, fontSize: 16 }
    }
  }

  get size() {
    return this.getAttribute('size');
  }

  set size(newVal) {
    this.setAttribute('size', newVal);
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      let sizeOptions = {
        small: { height: 14, fontSize: 12 },
        default: { height: 16, fontSize: 14 },
        large: { height: 24, fontSize: 18 }
      };
      let options = sizeOptions[newValue] || sizeOptions.default;
      this.style.height = `${options.height}px`;
      this.style.fontSize = `${options.fontSize}px`;
    }
  }
}

customElements.define('my-input', MyInput, { extends: "input" });
