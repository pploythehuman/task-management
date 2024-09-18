// services/taskService.js
import { Task } from '@/types';
import axiosInstance from './axiosInstance';

import axios from 'axios';

const getTasks = async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
};

const getTask = async (taskId: string) => {
  try {
    const response = await axiosInstance.get(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with ID ${taskId}:`, error);
    throw error;
  }
};

const createTask = async (taskData: Task) => {
  try {
    const response = await axiosInstance.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

const updateTask = async (taskId: string, taskData: Task) => {
  try {
    const response = await axiosInstance.put(`/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error(`Error updating task with ID ${taskId}:`, error);
    throw error;
  }
};

export {
  getTasks,
  getTask,
  createTask,
  updateTask,
}
