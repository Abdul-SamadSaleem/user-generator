import React from "react";

const Profile = props => {
  return (
    <div>
      <img src={props.imageUrl} alt="user profile pic" />
      <h3>I live in {props.info}</h3>
      <h3>My name is {props.name}</h3>
      <h3>I am {props.age} years old</h3>
    </div>
  );
};

export default Profile;
