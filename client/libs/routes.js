const API_BASE = '/api/v1';
const apiUrl = (endpoint = '') => {
  const separator = endpoint.length && endpoint[0] !== '/' ? '/' : '';
  return API_BASE + separator + endpoint;
};

export default apiUrl;
