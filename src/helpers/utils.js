export const API_ROOT =
  import.meta.env.VITE_API_ROOT || 'http://127.0.0.1:4001/api/v1'

export const APIUrls = {
  login: () => `${API_ROOT}/auth/login`,
  authenticateUser: () => `${API_ROOT}/auth/authenticate-user`,
  register: () => `${API_ROOT}/auth/register`,
  fetchAllLabels: () => `${API_ROOT}/labels`,
}
