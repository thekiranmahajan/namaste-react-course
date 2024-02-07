import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("PrfileClass: constructor");
  }
  componentDidMount() {
    console.log("PrfileClass: componentDidMount");
  }
  render() {
    console.log("PrfileClass: render()");
    return (
      <div>
        <div>
          Profile Class Component-- Count: {this.state.count}
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            Add
          </button>
        </div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
export default ProfileClass;
