const React = require('react');
const {array} = require('prop-types');

function StartingUnits({units}) {
    const listItems = units.map((unit, index) =>
        <li key={index}>{unit}</li>
    );
    return <ul className="starting-units">{listItems}</ul>;
}

StartingUnits.propTypes = {
    units : array.isRequired
};

module.exports = StartingUnits;