[![dazzboard logo](https://raw.githubusercontent.com/Dazzboard/dazzboard/master/static/logo.png)](https://github.com/Dazzboard/dazzboard)


# Dazzboard

> A  ✨ dazzling 💫  dashboard that works for you


## Features
 * Built with React + Next. Use any React component as a dashboard object 🍡
 * Pre-cooked on the server for instant page loads with SSR 🍳
 * Includes basic components to fill your first board 🍇


[![dazzboard](https://raw.githubusercontent.com/Dazzboard/dazzboard/master/static/screenshot.png)](https://github.com/Dazzboard/dazzboard)


## Install

```bash
# Clone the repository
$ git clone https://github.com/Dazzboard/dazzboard.git
$ cd dazzboard

# Install dependencies
$ npm install

# Run Development
$ npm run dev


```


## Run Production

`npm start`

_Opens at [localhost:3000](http://localhost:3000/)_

<!-- Using [NPM](https://npmjs.com):

```bash
# From the command line
$ npm install -g movie-info
``` -->


## API

### \<Dash />

A container for holding a singular componentized element.

###### Optional properties

`[background, badge, direction, fill, text, title, subtitle, subtext, width, wrap]`


### \<Board />

A collection of `<Dash />` elements representing a single dashboard. Nest multiple to add more Dazzboards.
(_also `<DashGroup />`, `<DashList />`, `<DashTabs />`_)

###### Optional properties

`[width]`


### \<DashGroup />

A container for multiple `<Dash />` elements.
(_also `<DashGroup />`, `<DashList />`, `<DashTabs />`_)

###### Optional properties

`[color, height, title, width]`


### \<DashList />

A container for multiple `<Dash />` elements, displayed in a compact format.

###### Optional properties

`[color, height, title, width]`


### \<DashTab />

A container for multiple `<DashGroup />` elements to create a tabbed list.


###### Optional properties

`[height, width]`


### \<Card />

A colorful `<Dash />` element with simpler API.

###### Optional properties

`[background, text, title, subtext, width]`


### \<Code />

A simple `monospace` text wrapper

###### Optional properties

`[color]`


##### background

Type: `string`

The CSS `background` value for the element.

###### Usage:

```jsx
background='linear-gradient(315deg, #df74f9, #b72cf6)'
```


##### badge

Type: `object`

Add a colored badge to a `<Dash />` element. Options are `success` and `error`.

###### Usage:

```jsx
badge={{ success: {text: 'OK', link: '#'}, error: {text: 'Alert!', link: '#'}}}
```


##### color

Type: `string`

Hex color for the highlight color or title color of an element.


##### direction

`'row'` || `'column'`

Set the Flexbox `flex-direction`.


##### fill

Type: `bool`

For stretching an element to fit it's container.

###### Usage:

```jsx
fill='true'
```


##### height

Type: `string`

Defines the element height.

###### Usage:

```jsx
height='300px'
```


##### width

Type: `number` || `array`

Defines a responsive element width. Use an array to define widths at multiple breakpoints.
More info in the [Rebass docs](jxnblk.com/rebass/).

###### Usage:

```jsx
width={[1, 1, 1, 1/4]}
```


##### wrap

Type: `bool`

Sets the Flexbox `flex-wrap`.

###### Usage:

```jsx
wrap='true'
```


##### text
##### title
##### subtext
##### subtitle

Type: `string`

Dash text content properties.


## License

[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
