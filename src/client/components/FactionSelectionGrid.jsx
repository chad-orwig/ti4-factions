const React = require('react');
const _ = require('lodash');
const FactionSelector = require('./FactionSelector.jsx');
const {factionMap} = require('../assets/factions');

function renderFactionSelector(factionAction, isSelected, factionKey) {
    const faction = factionMap[factionKey];
    return <FactionSelector
        key={factionKey}
        factionKey={factionKey}
        faction={faction}
        isSelected={isSelected}
        factionAction={factionAction}
    />
}

function FactionSelectionGrid({races, selectFunction, unselectFunction}) {
    const renderSelected = _.partial(renderFactionSelector, unselectFunction, true);
    const renderUnselected = _.partial(renderFactionSelector, selectFunction, false);

    const components = races.map(({factionKey, selected}) => {
        return selected ? renderSelected(factionKey) : renderUnselected(factionKey);
    });
    return (
        <div className="faction-selection-grid">
            {components}
        </div>
    );
}

module.exports = FactionSelectionGrid;