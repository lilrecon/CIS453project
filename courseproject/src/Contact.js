import React, { Component } from "react";
import download from './/images/image1.jpg';
 
class Contact extends Component {
  render() {
    return (
      <div>
        <img src={download}/>;
        <p>This is the contact page</p>
      </div>
    );
  }
}
 
export default Contact;