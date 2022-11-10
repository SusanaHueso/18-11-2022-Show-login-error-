import React from "react";
import * as ReactDOM from "react-dom";
import "./Home.css";

export default class Home extends React.Component {
  // const [toggle,setToggle] = useState(0);
  constructor(props) {
    super(props);
    this.state = { show: true, toggle: 0, componentState: "" };
  }

  componentDidMount() {
    this.setState({ componentState: "only the fist time" });
    setTimeout(() => {
      console.log("I appear", this.state.componentState);
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.toggle !== this.state.toggle) {
      this.setState({ componentState: "everytime the toggle component updates" });
      setTimeout(() => {
        console.log("I appear", this.state.componentState);
      }, 1000);
    }
  }

  change() {
    let toggleChanged = this.state.toggle === 0 ? 1 : 0;
    this.setState({ toggle: toggleChanged });
  }
  hide() {
    this.state.show === true
      ? this.setState({ show: false })
      : this.setState({ show: true });
  }

  render() {
    return (
      <div className="homeDesign">
        {this.state.show && (
          <div>
            <button onClick={() => this.change()}>
              This is a toggle button
            </button>
            <p>{this.state.toggle}</p>
          </div>
        )}
        <button onClick={() => this.hide()}>
          Click to hide/show the toggle button
        </button>
      </div>
    );
  }
}
