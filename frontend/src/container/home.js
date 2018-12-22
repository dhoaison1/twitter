import { connect } from 'react-redux';
import { GetFollowingPost } from '../action/userActions';
import Home from '../components/home';

const mapStateToProps = state => {
    return {
        user: state.authenticatedReducer,
        post: state.postReducer  
    }
};

const mapDispatchToProps = (dispatch) =>({
    getPost: (followingAddress) => {
        dispatch(GetFollowingPost(followingAddress))
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);