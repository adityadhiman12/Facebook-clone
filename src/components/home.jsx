 
import React from "react";
import app from "../firebase/firebase";

const Home = () => {
  return (
    <>
      <h1>Welcome to facebook</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;