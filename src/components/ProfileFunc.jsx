import React, { useEffect, useState } from "react";

const ProfileFunc = (props) => {
  const [count, setCount] = useState(0);
  const getProfileInfo = async () => {
    const API_URL = "  https://api.github.com/users/thekiranmahajan";
    const data = await fetch(API_URL).then((res) => res.json());
    console.log(data);
  };
  useEffect(() => {
    getProfileInfo();
    const interval = setInterval(() => {
      console.log("child-componentDidMount");
    }, 3000);

    console.log("useEffect called!");
    return () => {
      console.log("useEffect return!");

      clearInterval(interval);
    };
  }, []);
  console.log("render!");

  return (
    <div>
      <div>
        Profile Functional Component-- Count: {count}
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <h2>{props.name}</h2>
    </div>
  );
};

export default ProfileFunc;
