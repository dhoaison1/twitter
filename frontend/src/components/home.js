import React, { Component } from 'react';
import Navbar from './navbar';
import UserProfile from './userprofile';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
           <div >
               <Navbar></Navbar>
               <UserProfile></UserProfile>
           </div>
         );
    }
}
 
export default Home;