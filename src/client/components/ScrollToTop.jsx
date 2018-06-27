const {Component} = require('react');
const {withRouter} = require('react-router-dom');
const PropTypes = require('prop-types');

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }

}

ScrollToTop.propTypes = {
    location : PropTypes.object.isRequired,
    children : PropTypes.element
};

module.exports = withRouter(ScrollToTop);