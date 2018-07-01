const React = require('react');
const {string} = require('prop-types');

function UnitAbility({text}) {
    return <li>{text}</li>;
}

UnitAbility.propTypes = {
    text : string.isRequired
};

module.exports = UnitAbility;