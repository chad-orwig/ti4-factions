const React = require('react');
const PropTypes = require('prop-types');

function FactionAbility({name, text}) {
    return (
        <div className="faction-ability">
            <span className="name">{name}</span>
            <span className="text">{text}</span>
        </div>
    );
}

FactionAbility.propTypes = {
    name : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
};

module.exports = FactionAbility;