import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = state => {
    console.log(state.authenticatedReducer);
    return {
        user: state.authenticatedReducer  }
};

export default connect(
    mapStateToProps,
    null
)(Home);