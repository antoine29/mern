'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IssueList = require('./IssueList.jsx');

var _IssueList2 = _interopRequireDefault(_IssueList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import IssueAdd from './IssueAdd.jsx';

var contentNode = document.getElementById('contents');
// const issues = [];
_reactDom2.default.render(_react2.default.createElement(_IssueList2.default, null), contentNode);

if (module.hot) module.hot.accept();