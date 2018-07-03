const React = require('react');
const {array} = require('prop-types');
const Planet = require('./Planet.jsx');

function HomeSystem({planets}) {
    const elements = planets.map((p, index) =>
        <Planet name={p.name} resource={p.resource} influence={p.influence} key={index}/>
    );
    return (
        <div className="home-system">
            <h3>Home System</h3>
            <div className="planet-container">
                {elements}
            </div>
        </div>
    );
}

HomeSystem.propTypes = {
    planets : array.isRequired
};

module.exports = HomeSystem;