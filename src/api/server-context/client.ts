/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const StudentService = {
  createStudent: async (data: any) => {
    try {
      const response = await api.post('/students', data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  },

  listStudents: async () => {
    try {
      const response = await api.get('/students/');
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error('Error listing students:', error);
      throw error;
    }
  },

  deleteStudent: async () => {
    try {
      const response = await api.delete('/students');
      return response.data;
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  },

  getStudentById: async (id: string) => {
    try {
      const response = await api.get(`/students/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting student with ID ${id}:`, error);
      throw error;
    }
  },

  getStudentByEmail: async (email: string) => {
    try {
      const response = await api.get(`/students/email/${email}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting student with ID ${email}:`, error);
      throw error;
    }
  },

  updateStudent: async (data: any) => {
    try {
      const response = await api.put('/students', data);
      return response.data;
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  },

  applyEventToStudent: async (eventId: string, data: any) => {
    try {
      const response = await api.post(`/students/event/${eventId}`, data);
      return response.data;
    } catch (error) {
      console.error(
        `Error applying event to student with ID ${eventId}:`,
        error
      );
      throw error;
    }
  },

  getStudentsByTeacherId: async (teacherId: string) => {
    try {
      const response = await api.get(
        `/students/teacher-id/${teacherId}/students`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error getting students for teacher with ID ${teacherId}:`,
        error
      );
      throw error;
    }
  },
};

const TeacherService = {
  createTeacher: async (data: any) => {
    try {
      const response = await api.post('/teachers', data);
      return response.data;
    } catch (error) {
      console.error('Error creating teacher:', error);
      throw error;
    }
  },

  listTeachers: async () => {
    try {
      const response = await api.get('/teachers');
      return response.data;
    } catch (error) {
      console.error('Error listing teachers:', error);
      throw error;
    }
  },

  deleteTeacher: async () => {
    try {
      const response = await api.delete('/teachers');
      return response.data;
    } catch (error) {
      console.error('Error deleting teacher:', error);
      throw error;
    }
  },

  getTeacherById: async (id: string) => {
    try {
      const response = await api.get(`/teachers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting teacher with ID ${id}:`, error);
      throw error;
    }
  },

  updateTeacher: async (data: any) => {
    try {
      const response = await api.put('/teachers', data);
      return response.data;
    } catch (error) {
      console.error('Error updating teacher:', error);
      throw error;
    }
  },
};

export { StudentService, TeacherService };
