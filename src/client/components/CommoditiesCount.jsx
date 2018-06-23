const React = require('react');
const PropTypes = require('prop-types');

function CommoditiesCount({count}) {
    return (
        <div className="commodities">
            <span>{count}</span>
            <i className="fa fa-handshake-o" />
        </div>
    );
}

CommoditiesCount.propTypes = {
    count : PropTypes.number.isRequired
};

module.exports = CommoditiesCount;