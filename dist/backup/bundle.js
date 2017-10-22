'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Avoid problem with react not being defined
window.React = _react2.default;

//render all components
(0, _reactDom.render)(_routes2.default, document.getElementById('react-container'));
