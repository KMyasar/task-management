import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const addTask = async () => {
    await axios.post('http://localhost:5001/tasks', { title, description, dueDate, status });
    fetchTasks();
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due Date (dd-mm-yyyy)" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
