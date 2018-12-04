import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//
import './style/vendor/fontawesome-free/css/all.min.css';
import './style/css/sb-admin.css';
import './style/css/test.css';
import './style/css/home.css';
//
import NavBar from './container/navBar';
import UserProfile from './container/userProfile';
import EditProfile from './container/editProfile';
import HomeComponent from './container/home';
import Test from './container/test';
import Following from './container/following';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <div>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path='/user' component={UserProfile}></Route>
            <Route exact path='/user/edit' component={EditProfile}></Route>
            <Route exact path='/test' component={Test}></Route>
            <Route exact path='/user/following' component={Following}></Route>


          </div>
        </div>

      </Router>
      
     
    );
  }
}

export default App;
