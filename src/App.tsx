import { useEffect, useState } from 'react';
import './App.css';
import { ITask } from './Interfaces/ITask';
import NewTask from './Components/NewTask';
import TaskList from './Components/TaskList';

const TASK_LOCAL_STORAGE_KEY = 'tasks';

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem(TASK_LOCAL_STORAGE_KEY);
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(TASK_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);
  
  return (
    <div className="App">
      <NewTask updateTaskList={setTasks} />
      <TaskList tasks={tasks} updateTaskList={setTasks} />
    </div>
  );
}
