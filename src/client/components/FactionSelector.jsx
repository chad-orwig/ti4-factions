const React = require('react');
const PropTypes = require('prop-types');

function onClickBuilder(factionAction, faction) {
    return () => {
        factionAction(faction);
    };
}

function FactionSelector({faction, isSelected, factionAction, factionKey}) {

    const classes = ['faction-selector'];
    if(isSelected) {
        classes.push('selected');
    }
    const classString = classes.join(' ');
    return (
        <div className={classString} onClick={onClickBuilder(factionAction, factionKey)} >
            <img src={faction.img}/>
            <h1>{faction.name}</h1>
        </div>
    );
}

FactionSelector.propTypes = {
    faction : PropTypes.object.isRequired,
    isSelected : PropTypes.bool.isRequired,
    factionAction : PropTypes.func.isRequired,
    factionKey : PropTypes.string.isRequired
};

module.exports = FactionSelector;