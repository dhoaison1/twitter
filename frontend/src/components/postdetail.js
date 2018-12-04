import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: props.post
        }
    }
    render() { 
        console.log(this.state);
        const { post } = this.state;
        return ( 
            post.map((post, index ) => (
                <div key={index}>
                <div className="row bg-newfeed" style={{marginBottom: 50}}>
                <div className="col-1 icon-newfeed rounded-circle" style={{"backgroundImage": "url(images/chalee.jpg)"}}></div>
                <div className="col-11">
                  <div className="row">
                  <p style={{fontWeight: "bold"}}> {post.username}</p>
                  </div>
                  <div className="row">
                     <Link to="#">{post.heading}</Link>
                  </div>
                  <div className="row">
                     {post.content}
                  </div>
                  <div className="row">
                    <div className="col-2 ">
                        <span className="fas fa-heart"></span>
                      69 </div>
                    <div className="col-2">
                        <span className="fas fa-refresh"></span>
                      32</div>
                      <div className="col-2">
                          <span className="fas fa-thumbs-down"></span>
                        32</div>
                        <div className="col-2">
                            <span className="fas fa-thumbs-up"></span>
                          32</div>
                  </div>
                </div>
              </div>
              </div>

                
            ))
            

         );
    }
}
 
export default PostDetail;