import React, { Component } from "react";
import view from './/images/image2.jpg';
 
class Home extends Component {
  render() {
    return (
      <div>
        <img src={view}/>
        <p>Welcome to the shop</p>
      </div>
    );
  }
}
 
export default Home;