import React from "react";
import ProfileClass from "./ProfileClass";
// import ProfileFunc from "./ProfileFunc";
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Page</h1>
//       <ProfileFunc name={"Ray"} />
//       <ProfileClass name={"Kiran Mahajan"} />
//     </div>
//   );
// };
// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About: Parent-Constructor");
  }
  componentDidMount() {
    console.log("About: Parent-componentDidMount");
  }
  render() {
    console.log("About: Parent-render");

    return <ProfileClass name={"Kiran Mahajan"} />;
  }
}

export default About;
