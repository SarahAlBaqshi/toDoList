import React from "react";
import { decorate, observable } from "mobx";
import tasks from "../tasks";

class TaskStore {
  tasks = tasks;
}

decorate(TaskStore, {
  tasks: observable,
});

const taskStore = new TaskStore();

export default taskStore;
