import React, { useState } from "react";

const ProfileFunc = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        Profile Functional Component-- Count: {count}{" "}
        <button onClick={() => setCount(count + 1)}>Add</button>{" "}
      </div>
    </div>
  );
};

export default ProfileFunc;
