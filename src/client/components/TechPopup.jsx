const React = require('react');
const {object, func} = require('prop-types');
const Technology = require('./Technology.jsx');

function TechPopup({tech, target, hideTechDetails}) {
    const styleMap = {
        '--event-x' : `${target.offsetWidth}px`, 
        '--event-y': `${target.offsetTop}px`
    };
    const onClick = function(e) {
        e.preventDefault();
        hideTechDetails();
    };
    return (
        <div className='tech-popup' style={styleMap} onClick={onClick}>
            <Technology type={tech.type} name={tech.name} requirements={tech.requirements} text={tech.text}/>
        </div>
    );
}

TechPopup.propTypes = {
    hideTechDetails: func.isRequired,
    tech : object.isRequired,
    target : object.isRequired
};

module.exports = TechPopup;