const React = require('react');
const ReactDom = require('react-dom');
const TI4Cheat = require('./components/TI4Cheat.jsx');
require('./styles/styles.scss');
require('font-awesome-sass/assets/stylesheets/_font-awesome.scss')


ReactDom.render(
    <TI4Cheat />,
    document.getElementById('app')
);

