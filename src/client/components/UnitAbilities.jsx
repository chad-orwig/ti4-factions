const React = require('react');
const UnitAbility = require('./UnitAbility.jsx');
const {array} = require('prop-types');

function UnitAbilities({abilities}) {
    const abilityElements = abilities.map((a, index) => <UnitAbility key={index} text={a}/>);
    return (
        <ul>
            {abilityElements}
        </ul>
    );
}

UnitAbilities.propTypes = {
    abilities : array.isRequired
};

module.exports = UnitAbilities;