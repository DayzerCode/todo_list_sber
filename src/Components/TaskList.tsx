import { Dispatch } from 'react';
import { ITask } from '../Interfaces/ITask';

interface ITaskList {
  tasks: ITask[];
  updateTaskList: Dispatch<React.SetStateAction<ITask[]>>
}

export default function TaskList({ tasks, updateTaskList }: ITaskList) {
  const handleChangeDone = (e: React.MouseEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>, id: number) => {
    updateTaskList((prev) => {
      return prev.map(task => {
        if (task.id === id) {
          task.isDone = (e.target as HTMLInputElement).checked;
        }
        return task;
      })
    });
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div>
      {tasks.map(task => {
        return (
          <div key={task.id}>
            <label>
              <input
                checked={task.isDone}
                type='checkbox'
                onClick={(e) => handleChangeDone(e, task.id)}
                onChange={(e) => handleChangeDone(e, task.id)} />
              {task.name}
            </label>
          </div>
        )
      })}
    </div>
  );
}
