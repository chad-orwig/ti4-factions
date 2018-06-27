const {Component} = require('react');
const {withRouter} = require('react-router-dom');

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

module.exports = withRouter(ScrollToTop);