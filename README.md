# Enzyme Redux helpers
Enzyme helpers for testing Redux connected components.

## Installation

Using Yarn:

```
yarn add enzyme-redux-helpers -D
```

Using npm:

```
npm install enzyme-redux-helpers --save-dev
```

### Requirements
Requires [Enzyme](https://github.com/airbnb/enzyme) 3.0.0+ as a peer dependency to work.

## Usage

```js
import { connectedMount } from 'enzyme-redux-helpers'

describe('<MyConnectedComponent />', () => {
  it('renders correctly using the passed state', () => {
    const mockStore = createMockReduxStore({ state: 'foo' })
    const wrapper = connectedMount(<MyComponent />, mockStore);
    // expect(wrapper.find(SubComponent)).to.have.length(1);
  });
```

## API

This package contains the following methods as named exports:

### connectedMount(node, store)
Returns the Enzyme wrapper instance for the mounted React element.
