import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "john doe",
        location: "unknown",
      },
    };
    console.log("ProfileClass: child-constructor");
  }

  async componentDidMount() {
    const API_URL = "https://api.github.com/users/thekiranmahajan";
    const data = await fetch(API_URL).then((res) => res.json());
    console.log(data);

    this.setState({
      userData: data,
    });

    console.log("ProfileClass: componentDidMount");
  }

  render() {
    console.log("ProfileClass: render()");
    return (
      <div>
        <img src={this.state.userData.avatar_url} alt="avatar" />
        <h2>{this.state.userData.name}</h2>
        <h4>{this.state.userData.location}</h4>
      </div>
    );
  }
}
export default ProfileClass;
