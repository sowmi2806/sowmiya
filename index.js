'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactHelloWorld = React.createClass({
  displayName: 'ReactHelloWorld',
  render: function render() {
    return React.createElement(
      'div',
      null,
      ' Hello world!! '
    );
  }
});
ReactDOM.render(React.createElement(ReactHelloWorld, null), document.getElementById('app'));
module.exports = ReactHelloWorld;
