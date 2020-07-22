import React from "react";
import "./App.css";

//Components
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <TaskList />
    </div>
  );
}

export default App;
