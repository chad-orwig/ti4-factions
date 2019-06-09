const React = require('react');
const PropTypes = require('prop-types');
const FactionHeader = require('./FactionHeader.jsx');
const FactionAbilities = require('./FactionAbilities.jsx');
const Unit = require('./Unit.jsx');
const TechnologySection = require('./TechnologySection.jsx');
const PromissoryNote = require('./PromissoryNote.jsx');
const SpecialUnit = require('./SpecialUnit.jsx');
const Start = require('./Start.jsx');
const HomeSystem = require('./HomeSystem.jsx');
function Faction({name, img, abilities, flagship, techs, promissoryNote, commodities, specialUnits, start, showTechDetails}) {
    const specialUnitSection = specialUnits ? specialUnits.map( (u, index) => <SpecialUnit key={index} unit={u} />) : '';
    return (
        <div className="faction">
            <FactionHeader name={name} img={img} commodities={commodities}/>
            <FactionAbilities abilities={abilities}/>
            <h2>Flagship</h2>
            <Unit
                name={flagship.name}
                cost={flagship.cost}
                combat={flagship.combat}
                move={flagship.move}
                capacity={flagship.capacity}
                abilities={flagship.abilities} />
            {specialUnitSection}
            <TechnologySection techs={techs}/>
            <PromissoryNote name={promissoryNote.name} text={promissoryNote.text}/>
            <Start tech={start.tech} units={start.units} showTechDetails={showTechDetails}/>
            <HomeSystem planets={start.home}/>
        </div>
    );
}

Faction.propTypes = {
    name : PropTypes.string.isRequired,
    abilities : PropTypes.array.isRequired,
    flagship : PropTypes.object.isRequired,
    techs : PropTypes.array.isRequired,
    promissoryNote : PropTypes.object.isRequired,
    img : PropTypes.string.isRequired,
    commodities : PropTypes.number.isRequired,
    specialUnits : PropTypes.array,
    start: PropTypes.object.isRequired,
    showTechDetails : PropTypes.func.isRequired
};

module.exports = Faction;