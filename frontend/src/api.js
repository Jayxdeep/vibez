import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const signup = (data) =>
  axios.post(`${BASE_URL}/auth/signup`, data);

export const login = (data) =>
  axios.post(`${BASE_URL}/auth/login`, data);

export const getChapters = () =>
  axios.get(`${BASE_URL}/chapters`);

export const getShloka = (ch, sl) =>
  axios.get(`${BASE_URL}/shlok/${ch}/${sl}`);

export const getProgress = (token) =>
  axios.get(`${BASE_URL}/progress`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProgress = (data, token) =>
  axios.post(`${BASE_URL}/progress/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
