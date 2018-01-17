import { mount } from 'enzyme'

// mount the component and pass the store to its context
export const connectedMount = (component, store) => mount(component, { context: { store: store }, childContextTypes: { store: () => null }})
