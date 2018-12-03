import React, { Component } from 'react';
import '../style/images/chalee.jpg'
class UserProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                {/* user infor */}
                <div id="PictureTitel">
                </div>
                <div className="">
                    <div id="ava" className="rounded-circle offset-1" style={{ backgroundImage: "url('images/chalee.jpg')", zIndex: "3", position: "relative" }}>
                    </div>
                    <div >

                    </div>
                </div>

                <div className="row mt-0">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-2 text-center font-weight-bold">Tweet</div>
                            <div className="col-2 text-center font-weight-bold">Following</div>
                            <div className="col-2 text-center font-weight-bold">Follower</div>
                            <div className="col-2 text-center font-weight-bold">Favorite</div>
                            <div className="col-2 text-center font-weight-bold">List</div>
                            <div className="col-2 text-center font-weight-bold">Moment</div>
                        </div>
                        <div className="row">
                            <div className="col-2 text-center font-weight-bold text-success">23 N</div>
                            <div className="col-2 text-center font-weight-bold text-success">1,081</div>
                            <div className="col-2 text-center font-weight-bold text-success">71 Rep</div>
                            <div className="col-2 text-center font-weight-bold text-success">2.317</div>
                            <div className="col-2 text-center font-weight-bold text-success">1</div>
                            <div className="col-2 text-center font-weight-bold text-success">4</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="float-left">
                            <button className="border-customize btn btn-outline-danger font-weight-bold" style={{ width: "146px" }} >Follow</button>
                        </div>
                    </div>
                </div>
                <hr style={{ "paddingBottom": "0px", "marginBottom": "0px" }}></hr>

                {/* end user infor */}

                {/* content */}

                <div id="content" className="row mt-0">
  <div className="col-3 float-left" style={{marginLeft: 15}}>
    <h5 className="UserName mb-3 font-weight-bold" title="user-name">Ngoc Bui</h5>
    <div className="row mb-2 " title="description">I want eat chao sã dịt kkk</div>
    <div className="row mb-2 " title="Location">Toc truong mien nui - Quang Ngai</div>
    <div className="row mb-2" title="Times of register">Involved  6th February, 2018</div>
    <div className="row mb-2" title="Times of register">Study in university of science</div>
    <a href="#">Photos and videos</a>
  </div>
  <div className="col-6 bg-newfeed">
    <div className="row">
    <div className="col-2 text-center font-weight-bold text-danger">Tweet </div>
    <div className="col-3 text-center font-weight-bold text-danger">Tweet & reply </div>
    <div className="col-2 text-center font-weight-bold text-danger">Vehicle</div>
    <div className="col-1 "></div>
    <div className="col-2 "></div>
    <div className="col-2 "></div>
    </div>
    <div className="row bg-newfeed">
      <div className="col-1 icon-newfeed rounded-circle" style={{"background-image": "url(images/chalee.jpg)"}}></div>
      <div className="col-11">
        <div className="row">
          Ngoc Bui - November 30
        </div>
        <div className="row">
            Thread! There's still time to support our 5 featured #YouTubeGiving charities—click the "donate" button to the right of each video to make a difference in someone's life.
            Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone. 
        </div>
        <div className="row">
          <div className="col-2 ">
              <span className="glyphicon glyphicon-heart"></span>
            69 </div>
          <div className="col-2">
              <span className="glyphicon glyphicon-refresh"></span>
            32</div>
            <div className="col-2">
                <span className="glyphicon glyphicon-thumbs-down"></span>
              32</div>
              <div className="col-2">
                  <span className="glyphicon glyphicon-hand-right"></span>
                32</div>
        </div>
      </div>
    </div>
    
  </div>
  <div className="col-3">
    <div className="float-left">
      <div className="row bg-newfeed p-3">
        <h5>New to Twitter?</h5>
        <div >Sign up now to have your personal timeline!</div> <br/>
        <button className="border-customize btn btn-danger font-weight-bold" style={{width: "270px"}} >Registration</button>
      </div>

      <div className="bg-newfeed pl-3 mt-1">
        <div className="">
          <h5> You might also like ·</h5>
          <div className="row mb-1">          
                <div className=" icon-newfeed rounded-circle" style={{"backgroundImage": "url(images/1.PNG)"}}></div>
                <a href="#" className="ml-1">Chali putt</a>
          </div>
          <br/>
          <div className="row mb-1">          
              <div className=" icon-newfeed rounded-circle" style={{"backgroundImage": "url(images/5l.jpg)"}}></div>
              <a  href="#" className="ml-1">Tung oc cho</a>
          </div>
          <br/>
        <div className="row mb-1">          
            <div className=" icon-newfeed rounded-circle" style={{"backgroundImage": "url(images/1.PNG)"}}></div>
            <a  href="#" className="ml-1">Son doan ngu</a>
      </div>
      <br/>
     
        </div>
      </div>
    </div>
  </div>
  </div>
                {/* Enc */}
</div>

         );
    }
}
 
export default UserProfile;