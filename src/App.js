import React from "react";
import "./App.css";

//Components
import TaskList from "./components/TaskList";

//Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    fontFamily: "Rowdies",
    mainColor: "#1d1b38", // main font color
    backgroundColor: "#f6def6", // main background color
    gold: "#fdd365",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </ThemeProvider>
  );
}

export default App;
