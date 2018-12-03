import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//
import './style/vendor/fontawesome-free/css/all.min.css';
import './style/css/sb-admin.css';
import './style/css/test.css';
//
import NavBar from './container/navBar';
import UserProfile from './container/userProfile';
import EditProfile from './container/editProfile';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar></NavBar>
          <div>
            <Route exact path="/" component={UserProfile}></Route>
            <Route exact path='/edit' component={EditProfile}></Route>

          </div>
        </div>

      </Router>
      
     
    );
  }
}

export default App;
