import { ITask } from "../Interfaces/ITask";

export const createNewTask = (taskName: string): ITask => {
  return {
    id: Date.now(),
    name: taskName,
    isDone: false
  }
}