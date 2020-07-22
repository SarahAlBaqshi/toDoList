import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "../styles";

//Stores
import TaskStore from "../stores/TaskStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TaskModal = ({ isOpen, closeModal, oldTask }) => {
  const [task, setTask] = useState(
    oldTask ?? {
      task: "",
    }
  );

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    TaskStore.createTask(task);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Task</label>
            <input
              required
              type="text"
              name="task" //exact name of the argument in perfumeModal function
              onChange={handleChange}
              value={task.task}
              className="form-control"
            />
          </div>
        </div>
        {/* <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={task.task}
          />
        </div> */}
        <CreateButtonStyled className="btn float-right">
          {oldTask ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TaskModal;
