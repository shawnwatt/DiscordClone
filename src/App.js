import React from "react";
import { Counter } from "./counter/Counter";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
