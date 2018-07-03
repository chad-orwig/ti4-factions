const React = require('react');
const {string, number} = require('prop-types');

function Planet({name, resource, influence}) {
    return (
        <div className="planet">
            <h2>{name}</h2>
            <svg viewBox="-2 -2 104 104" className="planet-img">
                <path className="resource semi" d="M86 14 L14 86 A50 50 0 0 1 86 14 Z" />
                <path className="influence semi" d="M86 14 L14 86 A50 50 0 0 0 86 14 Z" />
                <text x="20" y="35" className="resource">{resource}</text>
                <text x="64" y="80" className="influence">{influence}</text>
            </svg>
        </div>
    );
}

Planet.propTypes = {
    name : string.isRequired,
    resource : number.isRequired,
    influence : number.isRequired
};

module.exports = Planet;