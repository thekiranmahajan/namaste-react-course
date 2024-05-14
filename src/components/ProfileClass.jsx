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
    console.log("child-constructor");
  }

  componentDidMount() {
    // //after first render
    // const API_URL = "https://api.github.com/users/thekiranmahajan";
    // const data = await fetch(API_URL).then((res) => res.json());
    // console.log(data);

    // this.setState({
    //   userData: data,
    // });

    // console.log("child-componentDidMount");
    this.interval = setInterval(() => {
      console.log("child-componentDidMount");
    }, 3000);
  }

  componentDidUpdate() {
    //every render or ui update
    console.log("child-componentDidUpdate");
  }

  componentWillUnmount() {
    //just before destroying the component lifecycle
    console.log("child-componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("child-render()");
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
