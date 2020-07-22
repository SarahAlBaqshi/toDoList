import React from "react";

import { observer } from "mobx-react";

//Components
import TaskItem from "./TaskItem";
// import SearchBar from "../SearchBar";

// Stores
import TaskStore from "../stores/TaskStore";

//Styles
import ListWrapper from "../styles";
import AddButton from "../Buttons/AddButton";

const TaskList = () => {
  const TaskList = TaskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div className="container">
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{TaskList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(TaskList);
