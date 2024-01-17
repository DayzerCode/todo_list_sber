import { Dispatch, useState } from 'react';
import { createNewTask } from '../Helpers/createNewTask';
import { ITask } from '../Interfaces/ITask';

interface INewTask {
  updateTaskList: Dispatch<React.SetStateAction<ITask[]>>
}

export default function NewTask({ updateTaskList }: INewTask) {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const handleChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTaskList((prev: ITask[]) => {
      return [...prev, createNewTask(newTaskName)];
    });
    setNewTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <input required type="text" onChange={handleChangeTaskName} value={newTaskName} />
      <button>Добавить</button>
    </form>
  );
}