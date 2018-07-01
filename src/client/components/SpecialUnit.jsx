const React = require('react');
const {object} = require('prop-types');
const Unit = require('./Unit.jsx');

function SpecialUnit({unit}) {
    const {cost, combat, move, capacity, name, replaces, abilities} = unit;

    return (
        <div className="special-unit">
            <h2>Special {replaces}</h2>
            <Unit name={name} cost={cost} combat={combat} move={move} capacity={capacity} abilities={abilities}/>
        </div>
    );
}

SpecialUnit.propTypes = {
    unit : object
};

module.exports = SpecialUnit;