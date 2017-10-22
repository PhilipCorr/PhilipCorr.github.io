import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

//Avoid problem with react not being defined
window.React = React

//render all components
render(routes, document.getElementById('react-container'))