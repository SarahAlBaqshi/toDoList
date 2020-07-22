import React, { useState } from "react";

import { observer } from "mobx-react";

//Styles
import { TaskWrapper } from "../styles";

//Components
import DeleteButton from "../Buttons/DeleteButton";

//Stores
import TaskStore from "../stores/TaskStore";

const TaskItem = ({ task }) => {
  return (
    <TaskWrapper>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={TaskStore.updateTask(task)}
      />
      <label>{task.task}</label>
      <DeleteButton taskID={task.id} />
    </TaskWrapper>
  );
};

export default observer(TaskItem);
