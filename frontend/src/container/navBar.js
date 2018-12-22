import { connect } from 'react-redux';
import NavBar from '../components/navbar';

const mapStateToProps = (state) => ({
    user: state.authenticatedReducer  
})


export default connect(
    mapStateToProps,
)(NavBar);