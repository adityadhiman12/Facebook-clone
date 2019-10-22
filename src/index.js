import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import app from "../src/firebase/firebase";

const db = app.firestore();

// get post by a specific user
const getPostsForUser = async () => {
  var user = db.collection("users").where("handle", "==", "sanket");
  user.get().then(data => {
    data.forEach(d => {
      var postsOfUser = db
        .collection("posts")
        .where("userHandle", "==", d.data().handle);
      postsOfUser.get().then(data => {
        data.forEach(d => {
          console.log(d.data());
        });
      });
    });
  });
};

//add post
const addPost = async () => {
  var user = db.collection("users").where("handle", "==", "aditya");
  user.get().then(data => {
    data.forEach(d => {
      db.collection("posts")
        .add({
          body: " welcome to the demo",
          commentCount: 0,
          createdAt: new Date().toISOString(),
          likeCount: 0,
          userHandle: d.data().handle,
          userImage:
            "https://firebasestorage.googleapis.com/v0/b/facebook-clone-d1de1.appspot.com/o/504.jpg?alt=media"
        })
        .then(function(docRef) {
          console.log("Document written with id", docRef.id);
        });
    });
  });
};

getPostsForUser();

// addPost();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
