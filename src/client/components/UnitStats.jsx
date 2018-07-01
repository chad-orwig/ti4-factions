const React = require('react');
const {string, number, oneOfType } = require('prop-types');
const UnitStat = require('./UnitStat.jsx');

function UnitStats({ cost, combat, move, capacity}) {
    return (
        <div className="unit-stats">
            <UnitStat type="Cost" value={cost} />
            <UnitStat type="Combat" value={combat} />
            <UnitStat type="Move" value={move}/>
            <UnitStat type="Capacity" value={capacity}/>
        </div>
    );
}

UnitStats.propTypes = {
    cost : number,
    combat : oneOfType(string, number),
    move : number,
    capacity : number
};

module.exports = UnitStats;