const React = require('react');
const PropTypes = require('prop-types');
const Faction = require('./Faction.jsx');
const {Link} = require('react-router-dom');
const TechPopup = require('./TechPopup.jsx');

function factionBuilder(faction, index, showTechDetails, hideTechDetails) {
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
            specialUnits={faction.specialUnits}
            start={faction.start}
            showTechDetails={showTechDetails}
            hideTechDetails={hideTechDetails}
        />
    );
}
function FactionList({factions, shownTech, showTechDetails, hideTechDetails}) {
    if(!Array.isArray(factions) || factions.length === 0) {
        return (
            <div className="no-factions">
                <h1>No Factions Selected</h1>
                <h2><Link to="/">Select some factions first</Link></h2>
            </div>
        );
    }

    const factionElements = factions.map((faction, index) => factionBuilder(faction, index, showTechDetails, hideTechDetails));
    const techPopup = shownTech ? (<TechPopup tech={shownTech.tech} target={shownTech.target} hideTechDetails={hideTechDetails}/>) : '';
    return (
        <div className="faction-list">
            {techPopup}
            {factionElements}
        </div>
    );
}

FactionList.propTypes = {
    factions : PropTypes.array.isRequired,
    hideTechDetails : PropTypes.func.isRequired,
    showTechDetails : PropTypes.func.isRequired,
    shownTech : PropTypes.object
};

module.exports = FactionList;