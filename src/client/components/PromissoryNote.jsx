const React = require('react');
const PropTypes = require('prop-types');

function PromissoryNote({name, text}) {
    const heading = `Promissory Note: ${name}`;
    return (
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
}

PromissoryNote.propTypes = {
    name : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
};

module.exports = PromissoryNote;