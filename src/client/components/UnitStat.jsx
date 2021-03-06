const React = require('react');
const {string, number, oneOfType} = require('prop-types');

function UnitStat({type, value}) {
    const safeValue = value || "-";
    return (
        <div className="unit-stat">
            <h2 className="value" >{safeValue}</h2>
            <h3 className="type" >{type}</h3>
        </div>
    );
}

UnitStat.propTypes = {
    type : string.isRequired,
    value : oneOfType([string, number])
};

module.exports = UnitStat;