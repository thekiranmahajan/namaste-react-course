import React from "react";
import ProfileFunc from "./ProfileFunc";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <ProfileFunc name={"Ray"} />
      <ProfileClass />
    </div>
  );
};
export default About;
