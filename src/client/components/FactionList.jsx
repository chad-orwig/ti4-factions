const React = require('react');
const PropTypes = require('prop-types');
const Faction = require('./Faction.jsx');

function factionBuilder(faction, index) {
    return (
        <Faction
            key={index}
            name={faction.name}
            abilities={faction.abilities}
            techs={faction.techs}
            promissoryNote={faction.promissoryNote}
            img={faction.img}
            flagship={faction.flagship}
            commodities={faction.commodities}
        />
    );
}
function FactionList({factions}) {
    const factionElements = factions.map(factionBuilder);
    return (
        <div className="faction-list">
            {factionElements}
        </div>
    );
}

FactionList.propTypes = {
    factions : PropTypes.array.isRequired
};

module.exports = FactionList;