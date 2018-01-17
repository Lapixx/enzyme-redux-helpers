import { mount } from 'enzyme'
import PropTypes from 'prop-types'

// mount the component and pass the store to its context
export const connectedMount = (component, store) => mount(component, { context: { store: store }, childContextTypes: { store: PropTypes.object }})
