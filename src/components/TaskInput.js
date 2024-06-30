import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  return (
    <div className="task-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;
