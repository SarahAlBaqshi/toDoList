import React from "react";

import { observer } from "mobx-react";

//Styles
import { TaskWrapper } from "../styles";

//Components
// import DeleteButton from "../Buttons/DeleteButton";
// import UpdateButton from "../Buttons/UpdateButton";

const TaskItem = ({ task }) => {
  return (
    <TaskWrapper>
      <p>{task.task}</p>
    </TaskWrapper>
  );
};

export default observer(TaskItem);
