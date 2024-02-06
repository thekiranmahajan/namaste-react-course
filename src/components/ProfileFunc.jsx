import React, { useState } from "react";

const ProfileFunc = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        Profile Functional Component-- Count: {count}{" "}
        <button onClick={() => setCount(count + 1)}>Add</button>{" "}
      </div>
      <h2>{props.name}</h2>
    </div>
  );
};

export default ProfileFunc;
