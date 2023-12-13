/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassI } from '@/shared/UI/Dashboard';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const ClassService = {
  createClass: async (data: ClassI) => {
    try {
      const response = await api.post('/class/', data);
      return response.data;
    } catch (error) {
      console.error('Error creating Class:', error);
      throw error;
    }
  },

  listClasses: async () => {
    try {
      const response = await api.get('/class/');
      return response.data;
    } catch (error) {
      console.error('Error listing Classes:', error);
      throw error;
    }
  },

  listClassesWithPagination: async (page: number, pageSize: number) => {
    try {
      const response = await api.get(
        `/class/?page=${page}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      console.error('Error listing Classes with pagination:', error);
      throw error;
    }
  },

  deleteClass: async () => {
    try {
      const response = await api.delete('/class/');
      return response.data;
    } catch (error) {
      console.error('Error deleting Class:', error);
      throw error;
    }
  },

  getClassById: async (id: string) => {
    try {
      const response = await api.get(`/class/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting Class with ID ${id}:`, error);
      throw error;
    }
  },

  updateClass: async (data: any) => {
    try {
      const response = await api.put('/class/', data);
      return response.data;
    } catch (error) {
      console.error('Error updating Class:', error);
      throw error;
    }
  },
};

export { ClassService };
