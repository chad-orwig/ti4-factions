const React = require('react');
const PropTypes = require('prop-types');

function requirementBuilder(req, index) {
    const classes = `tech-color ${req}`;
    return <span className={classes} key={index}/>;
}

function technologyArrayBuilder(text) {
    const lis = text.map((t, index) => <li key={index}>{t}</li>);
    return (
        <ul>
            {lis}
        </ul>
    )
}

function technologyTextBuilder(text) {
    if (Array.isArray(text)) {
        return technologyArrayBuilder(text);
    }
    return <p className="tech-text">{text}</p>
}

function Technology({type, name, requirements, text}) {
    const requirementElements = requirements.map(requirementBuilder);
    const techText = technologyTextBuilder(text);
    return (
    <div className="technology">
        <span className={`tech-color ${type}`}> </span>
        <span className={`name ${type}`}>{name}</span>
        ({requirementElements}):
        {techText}
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