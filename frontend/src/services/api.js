import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  getProfile: () => api.get('/auth/profile'),
  updatePreferences: (preferences) => api.put('/auth/preferences', { preferences }),
};

export const bookService = {
  getAllBooks: (keyword = '', category = '') => 
    api.get(`/books?keyword=${keyword}&category=${category}`),
  getBookById: (id) => api.get(`/books/${id}`),
  trackReading: (id, timeSpent) => api.post(`/books/${id}/read`, { timeSpent }),
};

export const aiService = {
  getRecommendations: (userId) => api.get(`/recommend/${userId}`),
};

export default api;
