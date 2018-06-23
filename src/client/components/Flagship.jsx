const React = require('react');
const abilityBuilder = (ability, index) => {
    return <li key={index}>{ability}</li>;
}

function Flagship ({name, cost, combat, move, capacity, abilities}) {
    const abilityListItems = abilities.map(abilityBuilder);
    return (
        <div className="flagship">
            <h2>Flagship: {name} (Cost {cost}; Combat {combat}; move {move}; capacity {capacity})</h2>
            <ul>
                {abilityListItems}
            </ul>
        </div>
    )
};

module.exports = Flagship;