import { Task, TaskCreationData } from '@/types';

import axios from 'axios';

const getTasks = async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
};

const getTask = async (taskId: string) => {
  const response = await axios.get(`/api/tasks/${taskId}`);
  return response.data;
};

const createTask = async (taskData: TaskCreationData) => {
  const response = await axios.post('/api/tasks', taskData);
  return response.data;
};

const updateTask = async (taskId: string, taskData: Task) => {
  const response = await axios.put(`/api/tasks/${taskId}`, taskData);
  return response.data;
};

export {
  getTasks,
  getTask,
  createTask,
  updateTask,
}
