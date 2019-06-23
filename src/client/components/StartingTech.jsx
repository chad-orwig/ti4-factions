const React = require('react');
const {array} = require('prop-types');
const TechLink = require('./TechLink.jsx');

function StartingTech({techArray}) {
    const listItems = techArray.map((tech, index) =>
        <li key={index}>
            <TechLink tech={tech} />
        </li>
    );
    return <ul className="starting-tech">{listItems}</ul>;
}

StartingTech.propTypes = {
    techArray : array.isRequired
};

module.exports = StartingTech;