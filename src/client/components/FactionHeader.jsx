const React = require('react');
const PropTypes = require('prop-types');
const CommoditiesCount = require('./CommoditiesCount.jsx');

function FactionHeader({name, img, commodities}) {
    return (
        <div className="faction-header">
            <img src={img} className="faction-image" />
            <h1>{name}</h1>
            <CommoditiesCount count={commodities} />
        </div>
    );
}

FactionHeader.propTypes = {
    name : PropTypes.string.isRequired,
    img  : PropTypes.string.isRequired,
    commodities : PropTypes.number.isRequired
};

module.exports = FactionHeader;