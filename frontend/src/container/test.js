import { connect } from 'react-redux';
import Test from '../components/test';

const mapStateToProps = state => ({
        user: state.userReducer,
        post: state.postReducer
});

export default connect(
    mapStateToProps,
    null
)(Test);