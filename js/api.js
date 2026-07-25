/**
 * Omid Hospital - API Client
 * Connects the main website to the backend API
 */

const API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : '/api';

const OmidAPI = {
  // Generic fetch wrapper
  async fetch(endpoint, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...options.headers };
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'خطای سرور');
    return data;
  },

  // Doctors
  getDoctors: (params = {}) => OmidAPI.fetch('/doctors?' + new URLSearchParams(params)),
  getDoctor: (id) => OmidAPI.fetch(`/doctors/${id}`),
  getDoctorSlots: (id, date) => OmidAPI.fetch(`/appointments/doctor/${id}/available-slots?date=${date}`),

  // Specialties
  getSpecialties: () => OmidAPI.fetch('/specialties'),

  // Departments
  getDepartments: () => OmidAPI.fetch('/departments'),

  // Appointments
  bookAppointment: (data) => OmidAPI.fetch('/appointments', { method: 'POST', body: JSON.stringify(data) }),
  getMyAppointments: () => OmidAPI.fetch('/appointments'),

  // Auth
  login: (u, p) => OmidAPI.fetch('/auth/login', { method: 'POST', body: JSON.stringify({ username: u, password: p }) }),
  register: (data) => OmidAPI.fetch('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  getMe: () => OmidAPI.fetch('/auth/me'),
  logout: () => { localStorage.removeItem('token'); localStorage.removeItem('user'); },
  isLoggedIn: () => !!localStorage.getItem('token'),
  getUser: () => { try { return JSON.parse(localStorage.getItem('user')); } catch { return null; } },
};

window.OmidAPI = OmidAPI;
