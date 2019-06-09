const React = require('react');
const PropTypes = require('prop-types');
const SpanOrList = require('./SpanOrList.jsx');

function requirementBuilder(req, index) {
    if(['B','Y','R','G','U'].includes(req)){
        const classes = `tech-color ${req}`;
        return <span className={classes} title="Requirements" key={index}/>;
    }
    return <img src={req.img} title={req.faction} className='tech-color U' key={index}/>;
}

function Technology({type, name, requirements, text}) {
    const requirementElements = requirements.length > 0 ?
        <span>({requirements.map(requirementBuilder)}):</span> : requirements.map(requirementBuilder);
    return (
    <div className="technology">
        <span className={`tech-color ${type}`}> </span>
        <span className={`name ${type}`}>{name}</span>
        {requirementElements}
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