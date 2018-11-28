import React, { Component } from "react";

export default class second extends Component {
  static async getInitialProps({ req }) {
    const a = req.a;
    return { a };
  }
  render() {
    return <div> Hello {this.props.a}</div>;
  }
}
