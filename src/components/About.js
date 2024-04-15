import User from "./User";
import UserClass from "./UserClass";
import React from "react";

//fuctional component
const About = () => {
  return (
    <div>
      <h1>About Page Food</h1>
      <User name="Vinay" location="Nizamabad (function)" />
      <UserClass name="Cho2" location="Uploor (class)" />
    </div>
  );
};

//Using class component

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("parent constructor");
//   }
//   //used to fetch api because it runs after the all renders completes
//   componentDidMount() {
//     console.log("parent component  did mount");
//   }
//   render() {
//     console.log("parent render");
//     return (
//       <div>
//         <h1>About page</h1>
//         <UserClass name="First" location="Uploor (class)" />
//         <UserClass name="Second" location="Uploor (class)" />
//       </div>
//     );
//   }
// }

// // parent constructor
// // parent render

// // First constructor
// // First render
// // Second constructor
// // Second render
// //<DOM UPDATED - IT SINGLE BATCH>
// // First component did mount
// // Second component did mount
// // parent component  did mount

export default About;
