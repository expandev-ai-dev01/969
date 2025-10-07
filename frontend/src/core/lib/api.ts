import axios from 'axios';

/**
 * Centralized API client configuration.
 * Two axios instances are defined for public and authenticated usage.
 */
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const apiConfig = {
  baseUrl: API_BASE,
  timeout: 30000,
};

export const publicClient = axios.create({
  baseURL: `${apiConfig.baseUrl}/api/v1/external`,
  timeout: apiConfig.timeout,
  headers: { 'Content-Type': 'application/json' },
});

export const authenticatedClient = axios.create({
  baseURL: `${apiConfig.baseUrl}/api/v1/internal`,
  timeout: apiConfig.timeout,
  headers: { 'Content-Type': 'application/json' },
});

// Add request interceptor for authenticatedClient to attach token
authenticatedClient.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    // ignore (SSR or restricted environment)
  }
  return config;
});

// Response interceptor for auth errors
authenticatedClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // Basic handling - feature implementations should replace with proper flows
      localStorage.removeItem('auth_token');
      // Optionally: redirect to login using location
      if (typeof window !== 'undefined') {
        window.location.href = '/welcome';
      }
    }
    return Promise.reject(err);
  }
);

export default publicClient;
