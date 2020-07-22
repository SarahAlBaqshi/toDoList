import React from "react";
import { DeleteButtonStyled } from "../styles";

//Stores
import TaskStore from "../stores/TaskStore";

const DeleteButton = ({ taskID }) => {
  const handleDelete = () => TaskStore.deleteTask(taskID);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
