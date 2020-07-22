import { decorate, observable } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
    } catch (error) {
      console.error("TaskStore -> fetchTasks -> error", error);
    }
  };

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
    } catch (error) {
      console.log("taskStore -> createTask -> error", error);
    }
  };

  deleteTask = async (taskID) => {
    await axios.delete(`http://localhost:8000/tasks/${taskID}`);
    this.tasks = this.tasks.filter((task) => task.id !== taskID);
  };
}

decorate(TaskStore, {
  tasks: observable,
});

const taskStore = new TaskStore();
taskStore.fetchTasks();

export default taskStore;
