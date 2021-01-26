import axios from 'axios';
const baseUrl = "http://localhost:3000/tasks"

export const getTask = () => axios.get(baseUrl).then((resp) => resp.data);
export const updateTask = (id: any, data: any) => axios.put(`${baseUrl}/${id}`, data).then((resp) => resp.data);
export const addTask = (data: any) => axios.post(baseUrl, data).then((resp) => resp.data);
export const deleteTask = (id: any) => axios.delete(`${baseUrl}/${id}`);
export const editStatus = (id: any, change: any) => axios.patch(`${baseUrl}/${id}`, change).then((resp) => resp.data);