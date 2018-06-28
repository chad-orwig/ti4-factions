const React = require('react');
const Component = React.Component;
const {withRouter} = require('react-router-dom');
const PropTypes = require('prop-types');

class ScrollToTop extends Component {
    constructor () {
        super();
        this.state ={};
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    componentDidCatch () {
        this.setState({error : true});
    }

    render() {
        if(this.state.error) {
            return this.errorPage();
        }
        return this.props.children;
    }

    errorPage() {
        return (
            <div className="error-panel">
                <h1>Woops...</h1>
                <p>Something went wrong.</p>
                <a className="btn btn-primary" href="/">Reset</a>
            </div>
        );
    }
}

ScrollToTop.propTypes = {
    location : PropTypes.object.isRequired,
    children : PropTypes.element
};

module.exports = withRouter(ScrollToTop);