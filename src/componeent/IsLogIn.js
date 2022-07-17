import React, { Component } from "react";

export default class IsLogIn extends Component {
  clickMe = () => {
    console.log("Buton is click");
  };
  render() {
    const login = true;
    return (
      <div>
        {login && <p>Hello you are login</p>}
        {!login && <p>you shuld be login first</p>}

        <button onClick={this.clickMe}>clickMe</button>
      </div>
    );
  }
}
