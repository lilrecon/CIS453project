import React, { Component } from "react";
import food from './/images/image3.jpg';
 
class Shop extends Component {
  render() {
    return (
      <div>
        <img src={food}/>;
        <p>This is the shopping page</p>
      </div>
    );
  }
}
 
export default Shop;