const React = require('react');
const PropTypes = require('prop-types');
const FactionHeader = require('./FactionHeader.jsx');
const FactionAbilities = require('./FactionAbilities.jsx');
const Unit = require('./Unit.jsx');
const TechnologySection = require('./TechnologySection.jsx');
const PromissoryNote = require('./PromissoryNote.jsx');
function Faction({name, img, abilities, flagship, techs, promissoryNote, commodities}) {
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
            <TechnologySection techs={techs}/>
            <PromissoryNote name={promissoryNote.name} text={promissoryNote.text}/>
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
    commodities : PropTypes.number.isRequired
};

module.exports = Faction;