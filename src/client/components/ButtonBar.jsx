const React = require('react');
const {withRouter, Link} = require('react-router-dom');
require('bootstrap/scss/bootstrap.scss');

const ButtonBar = withRouter(({location}) => {
    const onSelectionPage = location.pathname !== "/factions";
    const selectionButton = onSelectionPage ?
        <span className="nav-button disabled btn btn-primary btn-lg">Selection</span> :
        <Link to="/" className="nav-button btn btn-primary btn-lg">Selection</Link>;

    const detailsButton = onSelectionPage ?
        <Link to="/factions" className="right-button nav-button btn btn-primary btn-lg">Details</Link> :
        <span className="right-button nav-button disabled btn btn-primary btn-lg">Details</span>;
   return (
       <div className="button-bar">
           {selectionButton}
           {detailsButton}
       </div>
   )
});

module.exports = ButtonBar;