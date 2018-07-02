const React = require('react');
const {object} = require('prop-types');

function StartingTech({tech}) {
    const listItems = Object.keys(tech).map(key => <li key={key} className={tech[key]}>{key}</li>);
    return <ul className="starting-tech">{listItems}</ul>;
}

StartingTech.propTypes = {
    tech : object.isRequired
};

module.exports = StartingTech;