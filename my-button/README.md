# \<my-button\>

button component

## install

```sh
$ npm install my-elements -S
```

## import

```js
import 'my-elements/my-button/my-button.js';
```

## example

```html
<my-button>default button</my-button>
<my-button disabled>disabled button</my-button>
<my-button type="primary">primary button</my-button>
<my-button type="danger">danger button</my-button>
<my-button type="success">success button</my-button>
<my-button ghost>ghost button</my-button>
<my-button type="danger" shape="circle">circle button</my-button>
<my-button size="small">small button</my-button>
<my-button size="large" shape="circle">large button</my-button>
```

### properties

- type[String]: different type, different style, option Values: `default`, `primary`, `danger`, `success`, if this property is empty, it will be `default`;

- ghost[Boolean]: ghost style;

- size[String]: different size, option values: `small`, `default`, `large`, default value is `default`;

- shape[String]: handle the border radius shape, option values: `circle`;

- disabled[Boolean]: disable button click;
