import React, { useEffect } from "react";
// import { Counter } from "./counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./counter/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        // the user ris logged in
      } else {
        dispatch(logout());
        // the user is logged out
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
