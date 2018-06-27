const React = require('react');
const PropTypes = require('prop-types');

const abilityBuilder = (ability, index) => {
    return <li key={index}>{ability}</li>;
};

function Flagship ({name, cost, combat, move, capacity, abilities}) {
    const abilityListItems = abilities.map(abilityBuilder);
    return (
        <div className="flagship">
            <h2>Flagship: {name} (Cost {cost}; Combat {combat}; move {move}; capacity {capacity})</h2>
            <ul>
                {abilityListItems}
            </ul>
        </div>
    );
}

Flagship.propTypes = {
    name : PropTypes.string.isRequired,
    cost : PropTypes.number.isRequired,
    combat : PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    move : PropTypes.number.isRequired,
    capacity : PropTypes.number.isRequired,
    abilities : PropTypes.array.isRequired
};

module.exports = Flagship;