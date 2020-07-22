import React from "react";

import { observer } from "mobx-react";

//Styles
import { TaskWrapper } from "../styles";

//Components
import DeleteButton from "../Buttons/DeleteButton";

const TaskItem = ({ task }) => {
  return (
    <TaskWrapper>
      <input type="checkbox" className="hidden" readonly="" tabindex="0" />
      <label>{task.task}</label>
      <DeleteButton taskID={task.id} />
    </TaskWrapper>
  );
};

export default observer(TaskItem);
