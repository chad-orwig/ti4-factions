const React = require('react');
const {string, number, oneOfType, array} = require('prop-types');
const UnitStats = require('./UnitStats.jsx');
const UnitAbilities = require('./UnitAbilities.jsx');

function Unit({name, cost, combat, move, capacity, abilities }) {
    const footer = abilities && abilities.length ? (<UnitAbilities abilities={abilities}/>) : '';
    return (
        <div className="unit">
            <h2>{name}</h2>
            <UnitStats cost={cost} combat={combat} move={move} capacity={capacity} />
            {footer}
        </div>
    );
}

Unit.propTypes = {
    name : string.isRequired,
    cost : number,
    combat : oneOfType(string, number),
    move : number,
    capacity: number,
    abilities : array
};

module.exports = Unit;