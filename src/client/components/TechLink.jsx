const React = require('react');
const {object, func} = require('prop-types');


const TechLink = function({tech, showTechDetails}) {
    const onClick = function(e) {
        e.preventDefault();
        showTechDetails(tech, e.currentTarget.offsetWidth, e.currentTarget.offsetTop);
    };
    return <a onClick={onClick} className={tech.type}>{tech.name}</a>;

};

TechLink.propTypes = {
    tech : object.isRequired,
    showTechDetails : func.isRequired
};

module.exports = TechLink;