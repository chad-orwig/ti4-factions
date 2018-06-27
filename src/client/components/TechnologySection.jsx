const React = require('react');
const Technology = require('./Technology.jsx');
const PropTypes = require('prop-types');

function technologyBuilder({name, type, requirements, text}, index) {
    return (
        <li key={index}><Technology
            type={type}
            name={name}
            requirements={requirements}
            text={text}/></li>
    );
}

technologyBuilder.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    requirements: PropTypes.array.isRequired,
    text : PropTypes.string.isRequired
};

function TechnologySection({techs}) {
    const technologyElements = techs.map(technologyBuilder);
    return (
        <div className="technology-section">
            <h2>Faction Technologies:</h2>
            <ul className="tech-list">
                {technologyElements}
            </ul>
        </div>
    );
}

TechnologySection.propTypes = {
    techs : PropTypes.array.isRequired
};

module.exports = TechnologySection;

