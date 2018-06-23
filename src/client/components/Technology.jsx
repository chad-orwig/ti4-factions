const React = require('react');
const PropTypes = require('prop-types');

function requirementBuilder(req, index) {
    const classes = `tech-color ${req}`;
    return <span className={classes} key={index} />;
}

function Technology({type, name, requirements, text}) {
    const requirementElements = requirements.map(requirementBuilder);
    return (
      <div className="technology">
          <span className={`tech-color ${type}`}> </span>
          <span className={`name ${type}`}>{name}</span>
          ({requirementElements}):
          <span>{text}</span>
      </div>
    );
}

Technology.propTypes = {
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    requirements: PropTypes.array.isRequired,
    text : PropTypes.string.isRequired
};

module.exports = Technology;