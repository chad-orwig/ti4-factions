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

function TechnologySection({techs}) {
    const technologyElements = techs.map(technologyBuilder);
    return (
        <div className="technology-section">
            <h2>Faction Technologies:</h2>
            <ul>
                {technologyElements}
            </ul>
        </div>
    );
}

TechnologySection.propTypes = {
    techs : PropTypes.array.isRequired
};

module.exports = TechnologySection;

