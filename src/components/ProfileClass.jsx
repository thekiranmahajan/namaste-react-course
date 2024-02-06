import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
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
      </div>
    );
  }
}
export default ProfileClass;
