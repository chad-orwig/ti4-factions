const React = require('react');
const FactionAbility = require('./FactionAbility.jsx');
const PropTypes = require('prop-types');

const buildFactionAbility = ({name, text}, index) => {
    return <li key={index}><FactionAbility name={name} text={text} key={index}/></li>;
};

function FactionAbilities({abilities}) {
    const factionAbilities = abilities.map(buildFactionAbility);

    return (
        <div className="faction-abilities">
            <h2>Abilities</h2>
            <ul className="faction-ability-list">{factionAbilities}</ul>
        </div>
    );
}

FactionAbilities.propTypes = {
    abilities : PropTypes.array.isRequired
};

module.exports = FactionAbilities;