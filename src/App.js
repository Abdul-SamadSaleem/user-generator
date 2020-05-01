import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  // select a user from our list of people...
  const [user, setUser] = useState({});

  const generateRandomUser = () => {
    fetch("https://randomuser.me/api/").then(async response => {
      const user = await response.json();
      const {
        picture: { large },
        name: { first, last },
        dob: { age },
        location: { city }
      } = user.results[0];

      const imageUrl = large;
      const name = `${first} ${last}`;
      const location = city;

      const randomUser = {
        info: location,
        name,
        age,
        imageUrl
      };
      setUser(randomUser);
    });
  };

  // Run this code once when the component loads (ONLY THE FIRST TIME)
  useEffect(() => {
    generateRandomUser();
  }, []); // <<<--- This [] means we only run the code once when the component loads the first time

  return (
    <div className="App">
      <h1 className="title">User Generator</h1>
      <div className="profile">
        <Profile
          imageUrl={user.imageUrl}
          name={user.name}
          age={user.age}
          info={user.info}
        />
      </div>
      <div className="btnContainer">
        <button className="generateBtn" onClick={generateRandomUser}>
          Generate new user
        </button>
      </div>
    </div>
  );
}

export default App;
