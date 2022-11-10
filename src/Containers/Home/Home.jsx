import React, { useEffect, useState } from "react";
import "./Home.css";

export default class Home extends React.Component {
  // const [toggle,setToggle] = useState(0);
  constructor(props) {
    super(props);
    this.state = { toggle: 0 };
  }
  //componentWillUnmount(){}
  change() {
    let toggleChanged = this.state.toggle === 0 ? 1 : 0;
    this.setState({ toggle: toggleChanged });
  }

  render() {
    return (
      <div className="homeDesign">
        <button onClick={() => this.change()}>This is a toggle button</button>

        <p>{this.state.toggle}</p>
      </div>
    );
  }
}
