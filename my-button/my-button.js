import { LitElement, html } from 'lit-element';

class MyButton extends LitElement {

  static get properties() {
    return {
      type: { type: String, reflect: true },

      ghost: { type: Boolean, reflect: true },

      shape: { type: String, reflect: true },

      size: { type: String, reflect: true },

      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.size = 'default';
    this.type = 'default';
    this.ghost = false;
    this.shape = '';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'type') this._handleTypeChanged(newVal);
    if (name === 'ghost') this._handleGhostChanged(newVal);
    if (name === 'shape') this._handleShapeChanged(newVal);
    if (name === 'size') this._handleSizeChanged(newVal);
    if (name === 'disabled') this._handleDisabledChanged(newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _handleTypeChanged(newVal) {
    this._typeClass = newVal ? `${newVal}-type` : '';
  }

  _handleGhostChanged(newVal) {
    if (typeof newVal === 'null') {
      this._typeClass = `${this.type}-type`;
      this._ghostClass = '';
    } else {
      this._typeClass = '';
      this._ghostClass = 'ghost';
    }
  }

  _handleShapeChanged(newVal) {
    if (newVal === 'circle') {
      this._shapeClass = `shape-circle-${this.size}`;
    }
  }

  _handleSizeChanged(newVal) {
    if (['small', 'default', 'large'].indexOf(newVal) > -1) {
      this._sizeClass = `${newVal}-size`;
    } else {
      this._sizeClass = 'default-size';
    }
  }

  _handleDisabledChanged(newVal) {
    if (newVal || newVal === '') {
      this.addEventListener('click', this._disabledClickEvent, true);
      return
    }
    this.removeEventListener('click', this._disabledClickEvent, true);
  }

  _disabledClickEvent(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    return html`
      <style>
        :host[hidden] {
          display: none;
        }
        :host([disabled]) button {
          border-color: #BDBDBD!important;
          color: #BDBDBD!important;
          cursor: not-allowed!important;
        }
        :host {
          display: inline-block;
        }
        button {
          padding: 8px 16px;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          border: 1px solid #616161;
          background-color: white;
          color: #616161;
        }
        button:hover {
          background: none;
          border-color: #1E88E5;
          color: #1E88E5;
        }
        .primary-type {
          background-color: #1E88E5;
          border: 1px solid #1E88E5;
          color: white;
        }
        .primary-type:hover {
          background-color: #64B5F6;
          border-color: #64B5F6;
          color: white;
        }
        .danger-type {
          background-color: white;
          border: 1px solid #E53935;
          color: #E53935;
        }
        .danger-type:hover {
          background-color: #E53935;
          border-color: #E53935;
          color: white;
        }
        .success-type {
          background-color: white;
          border: 1px solid #43A047;
          color: #43A047;
        }
        .success-type:hover {
          background-color: #43A047;
          border-color: #43A047;
          color: white;
        }
        .ghost {
          background: none;
          color: #E0E0E0;
          border: 1px solid #E0E0E0;
        }
        .ghost:hover {
          color: #E0E0E0;
          border: 1px solid #E0E0E0;
        }
        .shape-circle-small {
          border-radius: 18px;
        }
        .shape-circle-default {
          border-radius: 22px;
        }
        .shape-circle-large {
          border-radius: 26px;
        }
        .small-size {
          font-size: 12px;
          line-height: 12px;
          padding: 4px 8px;
        }
        .default-size {
          font-size: 14px;
          line-height: 14px;
        }
        .large-size {
          font-size: 18px;
          line-height: 18px;
        }
      </style>

      <button class="${this._typeClass} ${this._ghostClass} ${this._shapeClass} ${this._sizeClass}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);