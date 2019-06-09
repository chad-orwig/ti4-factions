const React = require('react');
const {array, func} = require('prop-types');
const TechLink = require('./TechLink.jsx');

function StartingTech({techArray, showTechDetails}) {
    const listItems = techArray.map((tech, index) =>
        <li key={index}>
            <TechLink tech={tech} showTechDetails={showTechDetails}/>
        </li>
    );
    return <ul className="starting-tech">{listItems}</ul>;
}

StartingTech.propTypes = {
    techArray : array.isRequired,
    showTechDetails : func.isRequired
};

module.exports = StartingTech;