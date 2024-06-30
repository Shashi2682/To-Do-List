import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../tasksSlice';


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list-container">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <div className="task-actions">
              <button
                className="edit-button"
                onClick={() => {
                  const newText = prompt('Edit task:', task.text);
                  if (newText) {
                    dispatch(editTask({ id: task.id, text: newText }));
                  }
                }}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
