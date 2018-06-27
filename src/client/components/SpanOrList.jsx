const React = require('react');
const PropTypes = require('prop-types');
function listBuilder(text) {
    const lis = text.map((t, index) => <li key={index}>{t}</li>);
    return (
        <ul>
            {lis}
        </ul>
    );
}

function SpanOrList({text}) {
    if (Array.isArray(text)) {
        return listBuilder(text);
    }
    return <p>{text}</p>;
}

SpanOrList.propTypes = {
    text : PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

module.exports = SpanOrList;