const React = require('react');
const PropTypes = require('prop-types');
const SpanOrList = require('./SpanOrList.jsx');

function FactionAbility({name, text}) {
    return (
        <div className="faction-ability">
            <span className="name">{name}</span>
            <SpanOrList text={text}/>
        </div>
    );
}

FactionAbility.propTypes = {
    name : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
};

module.exports = FactionAbility;