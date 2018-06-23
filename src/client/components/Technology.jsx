const React = require('react');
const PropTypes = require('prop-types');
const SpanOrList = require('./SpanOrList.jsx');

function requirementBuilder(req, index) {
    const classes = `tech-color ${req}`;
    return <span className={classes} key={index}/>;
}

function Technology({type, name, requirements, text}) {
    const requirementElements = requirements.map(requirementBuilder);
    return (
    <div className="technology">
        <span className={`tech-color ${type}`}> </span>
        <span className={`name ${type}`}>{name}</span>
        ({requirementElements}):
        <SpanOrList text={text} />
    </div>
    );
}

Technology.propTypes = {
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    requirements: PropTypes.array.isRequired,
    text : PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

module.exports = Technology;