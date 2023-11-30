export const BASE_ROOT =
  import.meta.env.VITE_BASE_ROOT || 'http://127.0.0.1:4001'
export const API_ROOT =
  import.meta.env.VITE_API_ROOT || 'http://127.0.0.1:4001/api/v1'

export const APIUrls = {
  login: () => `${API_ROOT}/auth/login`,
  authenticateUser: () => `${API_ROOT}/auth/authenticate-user`,
  register: () => `${API_ROOT}/auth/register`,
  fetchAllLabels: () => `${API_ROOT}/labels`,
  createLabel: (data) => `${API_ROOT}/labels/create?name=${data}`,
  deleteLabel: (labelId) => `${API_ROOT}/labels/delete/${labelId}`,
  fetchAllPosts: () => `${API_ROOT}/posts`,
  createPost: () => `${API_ROOT}/posts/create`,
  assignLabelToPost: (postId, labelId) =>
    `${API_ROOT}/posts/assignLabel?postId=${postId}&labelId=${labelId}`,
}
