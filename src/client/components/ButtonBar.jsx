const React = require('react');
const {withRouter, Link} = require('react-router-dom');

const ButtonBar = withRouter(({location}) => {
    const onSelectionPage = location.pathname === "/";
    const selectionButton = onSelectionPage ?
        <span className="nav-button disabled">Selection</span> :
        <Link to="/" className="nav-button">Selection</Link>;

    const detailsButton = onSelectionPage ?
        <Link to="/factions" className="right-button nav-button">Details</Link> :
        <span className="right-button nav-button disabled">Details</span>;
   return (
       <div>
           {selectionButton}
           {detailsButton}
       </div>
   )
});

module.exports = ButtonBar;