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
    console.log("Parent-Constructor");
  }
  componentDidMount() {
    console.log("Parent-componentDidMount");
  }
  render() {
    console.log("Parent-render");

    return <ProfileClass name={"chomu"} />;
  }
}

export default About;
