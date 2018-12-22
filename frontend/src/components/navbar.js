import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../action/authentication';
import { persistor } from '../store';


class Navbar extends Component {
    state = {
        user: {}
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.user) {
            return {
                user: nextProps.user
            }
        }
        return null;
    }
    
    onLogout = e => {
       this.props.Logout(this.props.history);
            persistor.purge();
    }
    render() { 
        const { user } = this.state.user;
        const { isAuthenticated } = this.props.user;  
        const authenticatedLink = (
            <ul className="navbar-nav mr-5 font-weight-bold sticky-top">
            <li className="nav-item ml-5">
            <a className="nav-link text-dark iconWeb" href="#"></a>
            </li>
            <li className="nav-item mr-1">
            <Link className="nav-link text-dark" href="#" to='/'>Home </Link>
            </li>
            {/* <li className="nav-item mr-1 ">
                <a className="nav-link text-dark" href="#">About</a>
            </li> */}
             <li className="nav-item align-textbox-Search" style={{position: "relative",
                      float: "right"}}>
                          <form className="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2 border-customize" type="search" placeholder="Search" aria-label="Search"></input>
                              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                          </form>
                      </li>
                      
                      <li className="nav-item dropdown no-arrow ml-2" style={{position: "relative",
                      float: "right"}}>
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-circle fa-fw" ></i>
                      </a>
                      </li>
                            <Link to='/user'>
                                <li className="nav-item alignRignt accoutInfor ">
                                    <div style={{color: 'black', textDecoration: 'none'}}>{user.username}</div> 
                                </li>
                            </Link>
                      
                      <li className="nav-item dropdown no-arrow" style={{position: "relative",
                      float: "right"}}>
                      <button className="btn btn-danger" type="button" onClick={this.onLogout}>Logout</button>

                      </li>
        
        
        </ul>
           
        )
        const guestLink = (
            <ul className="navbar-nav mr-5 font-weight-bold sticky-top">
                      <li className="nav-item ml-5">
                      <a className="nav-link text-dark iconWeb" href="#"></a>
                      </li>
                      <li className="nav-item mr-1">
                      <Link className="nav-link text-dark" href="#" to='/'>Home </Link>
                      </li>
                  </ul>

        )
        return ( 
            //

              <div id="menu" className="row bg-lightc">
              <nav className="navbar navbar-expand-lg navbar-light bg-light textNav " style={{width: "100%"}}>
                  <div className="collapse navbar-collapse" >
                  { isAuthenticated ? authenticatedLink :  guestLink}

                  </div>
                  
              </nav>
              </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authenticatedReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Logout: (history) => {
            dispatch(Logout());
            sessionStorage.clear();
            history.push('/')
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));