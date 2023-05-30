import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/Profile";
import Logo from "./components/Logo";
import PhotoOfTheDay from "./components/PhotoOfTheDay";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ")
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Profile />
      <Logo />
      <PhotoOfTheDay data={data}/>
    </div>
  );
}

export default App;
