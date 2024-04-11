import { useState } from "react";

const User = (props) => {
  const [score, setScore] = useState(6);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h2>Location: {props.location}</h2>
      <h2>Score:{score}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        IncreaseScore
      </button>
    </div>
  );
};
export default User;
