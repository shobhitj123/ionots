import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

export const getProjects = () => api.get('/projects');
export const updateProjectProgress = (id, data) => api.put(`/projects/${id}/progress`, data);
