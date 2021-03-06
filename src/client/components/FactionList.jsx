const React = require('react');
const PropTypes = require('prop-types');
const Faction = require('./Faction.jsx');
const {Link} = require('react-router-dom');

function factionBuilder(faction) {
    return (
        <Faction
            key={faction.name}
            name={faction.name}
            abilities={faction.abilities}
            techs={faction.techs}
            promissoryNote={faction.promissoryNote}
            img={faction.img}
            flagship={faction.flagship}
            commodities={faction.commodities}
            specialUnits={faction.specialUnits}
            start={faction.start}
        />
    );
}
function FactionList({factions}) {
    if(!Array.isArray(factions) || factions.length === 0) {
        return (
            <div className="no-factions">
                <h1>No Factions Selected</h1>
                <h2><Link to="/">Select some factions first</Link></h2>
            </div>
        );
    }

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